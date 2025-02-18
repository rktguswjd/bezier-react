/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import { ColumnState } from '../../redux/LayoutActions'

export default interface NavigationContentProps extends ChildrenComponentProps {
  header?: React.ReactElement | null
  fixedHeader?: boolean
  stickyFooter?: React.ReactElement | null
  scrollRef?: React.Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: () => void
  onChangeWidth?: (width: number) => void

  /* LayoutState Prop */
  layoutOption: ColumnState
  showNavigation?: boolean
}
