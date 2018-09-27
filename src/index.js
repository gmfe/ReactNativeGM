import Variable from './variable'
import Styles from './styles'
import StyleSheet from './style_sheet'
import Button from './button'
import {
  Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter
} from './cell'
import { Dialog, Alert, Confirm, Prompt } from './dialog'
import Text from './text'
import {
  Radio
} from './form'
import Icon from './ifont'
import Toast from './toast'
import { SearchBar } from './searchbar'
import Page from './page'
import LayerRoot from './layer_root'
import Square from './square'
import Util from './util'
import ListBox from './list_box'
import { Infinite, InfiniteBox } from './infinite'
import ActionSheet from './actionsheet'
import Mask from './mask'
import Storage from './storage'
import Popup from './popup'
import Keyboard from './keyboard'
import importComponent from './import_component'

const V = Variable
const S = Styles

export {
  Util,

  Variable, Styles, V, S,
  StyleSheet,

  importComponent,

  Page,

  Text,

  Icon,

  Button, Radio,

  Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter,

  LayerRoot,
  Mask,
  Popup,
  Dialog, Alert, Confirm, Prompt,
  Toast,
  ActionSheet,

  Square,

  ListBox,

  Infinite, InfiniteBox,

  SearchBar,

  Keyboard,

  Storage
}
