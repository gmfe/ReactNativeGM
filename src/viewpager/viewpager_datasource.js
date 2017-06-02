'use strict';
function defaultGetPageData(
    dataBlob: any,
    pageID: number | string,
): any {
    return dataBlob[pageID];
}

type differType = (data1: any, data2: any) => boolean;

type ParamType = {
    pageHasChanged: differType;
    getPageData: ?typeof defaultGetPageData;
}

class ViewPagerDataSource {
    constructor(params: ParamType) {
        this._getPageData = params.getPageData || defaultGetPageData;
        this._pageHasChanged = params.pageHasChanged;
        this.pageIdentities = [];
    }

    cloneWithPages(dataBlob: any, pageIdentities: ?Array<string>): ViewPagerDataSource {
        let newSource = new ViewPagerDataSource({
            getPageData: this._getPageData,
            pageHasChanged: this._pageHasChanged
        });
        newSource._dataBlob = dataBlob;
        if (pageIdentities) {
            newSource.pageIdentities = pageIdentities;
        } else {
            newSource.pageIdentities = Object.keys(dataBlob);
        }
        newSource._cachedPageCount = newSource.pageIdentities.length;
        newSource._calculateDirtyPages(this._dataBlob, this.pageIdentities);
        return newSource;
    }

    getPageCount(): number {
        return this._cachedPageCount;
    }

    /**
     * Returns if the row is dirtied and needs to be rerendered
     */
    pageShouldUpdate(pageIndex: number): boolean {
        const needsUpdate = this._dirtyPages[pageIndex];
        return needsUpdate;
    }

    /**
     * Gets the data required to render the page
     */
    getPageData(pageIndex: number): any {
        if (!this.getPageData) {return null;}
        const pageID = this.pageIdentities[pageIndex];
        return this._getPageData(this._dataBlob,pageID);
    }

    /**
     * Private members and methods.
     */

    _getPageData: typeof defaultGetPageData;
    _pageHasChanged: differType;

    _dataBlob: any;
    _dirtyPages: Array<boolean>;
    _cachedRowCount: number;

    pageIdentities: Array<string>;

    _calculateDirtyPages(prevDataBlob: any, prevPageIDs: Array<string>): void {
        // construct a hashmap of the existing (old) id arrays
        const prevPagesHash = keyedDictionaryFromArray(prevPageIDs);
        this._dirtyPages = [];
        let dirty;
        for (let sIndex = 0; sIndex < this.pageIdentities.length; sIndex++) {
            const pageID = this.pageIdentities[sIndex];
            dirty = !prevPagesHash[pageID];
            const pageHasChanged = this._pageHasChanged;
            if (!dirty && pageHasChanged) {
                dirty = pageHasChanged(
                    this._getPageData(prevDataBlob, pageID),
                    this._getPageData(this._dataBlob, pageID)
                );
            }
            this._dirtyPages.push(!!dirty);
        }
    }

}

export function keyedDictionaryFromArray(arr) {
    if (arr.length === 0) {
        return {};
    }
    let result = {};
    for (let ii = 0; ii < arr.length; ii++) {
        const key = arr[ii];
        //    warning(!result[key], 'Value appears more than once in array: ' + key);
        result[key] = true;
    }
    return result;
}

export default ViewPagerDataSource;
