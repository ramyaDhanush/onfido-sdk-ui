import { h } from 'preact'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { compose } from '../utils/func'
import { setNavigationDisabled } from '../../core/store/actions/globals'
import { withFullScreenState } from '../FullScreen'
import style from './style.css'
import {preventDefaultOnClick, isDesktop} from '../utils'
import {localised} from '../../locales'

export const withNavigationDisabledState = connect(({ globals: { isNavigationDisabled }}) => ({ isNavigationDisabled }))

export const withNavigationDisableAction = connect(null, dispatch => ({
  setNavigationDisabled: value => dispatch(setNavigationDisabled(value))
}))

const NavigationBar = ({back, translate, disabled, isFullScreen, className}) =>
  <div className={classNames(className, style.navigation, {
    [style.fullScreenNav]: isFullScreen
  })}>
    <button
      aria-label={translate('back')}
      className={classNames(style.back, {
        [style.disabled]: disabled,
        [style.backHoverDesktop]: isDesktop
      })}
      onClick={preventDefaultOnClick(back)}
    >
        <span className={style.iconBack} />
        <span className={style.label} aria-hidden="true">
          {translate('back')}
        </span>
    </button>
 </div>

export default compose(
  withFullScreenState,
  localised
)(NavigationBar)
