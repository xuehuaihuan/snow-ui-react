import { lighten, darken } from 'polished';
import {
  majorColor,
  minorColor,
  plainColor,
  successColor,
  infoColor,
  dangerColor,
  warningColor,
  disabledColor,
  lightColor,
  generalColor2,
  generalColor8,
  transparent,
} from '../common/theme/color';

export const buttonLightColor = lightColor;

/* major start - 主要 开始 */
// has border - 有边框
export const buttonMajorHasBorderFgcolor = majorColor;
export const buttonMajorHasBorderBgcolor = transparent;
export const buttonMajorHasBorderActiveBgcolor = lighten(0.25, buttonMajorHasBorderFgcolor);
export const buttonMajorBorderColor = buttonMajorHasBorderFgcolor;
export const buttonMajorInverseActiveFgcolor = buttonLightColor;
export const buttonMajorInverseActiveBgcolor = buttonMajorHasBorderFgcolor;
export const buttonMajorInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonMajorFgcolor = buttonLightColor;
export const buttonMajorBgcolor = majorColor;
export const buttonMajorActiveBgcolor = darken(0.2, majorColor);
// background gradient - 背景渐变
export const buttonMajorBggradientStartColor = lighten(0.1, buttonMajorBgcolor);
export const buttonMajorBggradientEndColor = darken(0.15, buttonMajorBgcolor);
export const buttonMajorActiveBggradientStartColor = buttonMajorBggradientStartColor;
export const buttonMajorActiveBggradientEndColor = buttonMajorBggradientEndColor;
/* major end - 主要 - 结束 */

/* minor start - 次要 开始 */
// has border - 有边框
export const buttonMinorHasBorderFgcolor = minorColor;
export const buttonMinorHasBorderBgcolor = transparent;
export const buttonMinorHasBorderActiveBgcolor = lighten(0.4, buttonMinorHasBorderFgcolor);
export const buttonMinorBorderColor = buttonMinorHasBorderFgcolor;
export const buttonMinorInverseActiveFgcolor = buttonLightColor;
export const buttonMinorInverseActiveBgcolor = buttonMinorHasBorderFgcolor;
export const buttonMinorInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonMinorFgcolor = buttonLightColor;
export const buttonMinorBgcolor = minorColor;
export const buttonMinorActiveBgcolor = darken(0.1, minorColor);
// background gradient - 背景渐变
export const buttonMinorBggradientStartColor = lighten(0.1, buttonMinorBgcolor);
export const buttonMinorBggradientEndColor = darken(0.15, buttonMinorBgcolor);
export const buttonMinorActiveBggradientStartColor = buttonMinorBggradientStartColor;
export const buttonMinorActiveBggradientEndColor = buttonMinorBggradientEndColor;
/* minor end - 次要 - 结束 */

/* plain start - 朴素 开始 */
// has border - 有边框
export const buttonPlainHasBorderFgcolor = generalColor2;
export const buttonPlainHasBorderBgcolor = plainColor;
export const buttonPlainHasBorderActiveBgcolor = darken(0.1, plainColor);
export const buttonPlainBorderColor = generalColor8;
export const buttonPlainInverseActiveFgcolor = buttonLightColor;
export const buttonPlainInverseActiveBgcolor = buttonPlainHasBorderFgcolor;
export const buttonPlainInverseActiveBorderColor = buttonPlainHasBorderFgcolor;
export const buttonPlainInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonPlainFgcolor = generalColor2;
export const buttonPlainBgcolor = plainColor;
export const buttonPlainActiveBgcolor = darken(0.15, plainColor);
// background gradient - 背景渐变
export const buttonPlainBggradientStartColor = lighten(0.1, buttonPlainBgcolor);
export const buttonPlainBggradientEndColor = darken(0.15, buttonPlainBgcolor);
export const buttonPlainActiveBggradientStartColor = buttonPlainBggradientStartColor;
export const buttonPlainActiveBggradientEndColor = buttonPlainBggradientEndColor;
/* plain end - 朴素 - 结束 */

/* success start - 成功 开始 */
// has border - 有边框
export const buttonSuccessHasBorderFgcolor = successColor;
export const buttonSuccessHasBorderBgcolor = transparent;
export const buttonSuccessHasBorderActiveBgcolor = lighten(0.4, buttonSuccessHasBorderFgcolor);
export const buttonSuccessBorderColor = buttonSuccessHasBorderFgcolor;
export const buttonSuccessInverseActiveFgcolor = buttonLightColor;
export const buttonSuccessInverseActiveBgcolor = buttonSuccessHasBorderFgcolor;
export const buttonSuccessInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonSuccessFgcolor = buttonLightColor;
export const buttonSuccessBgcolor = successColor;
export const buttonSuccessActiveBgcolor = darken(0.1, successColor);
// background gradient - 背景渐变
export const buttonSuccessBggradientStartColor = lighten(0.1, buttonSuccessBgcolor);
export const buttonSuccessBggradientEndColor = darken(0.15, buttonSuccessBgcolor);
export const buttonSuccessActiveBggradientStartColor = buttonSuccessBggradientStartColor;
export const buttonSuccessActiveBggradientEndColor = buttonSuccessBggradientEndColor;
/* success end - 成功 - 结束 */

/* info start - 信息 开始 */
// has border - 有边框
export const buttonInfoHasBorderFgcolor = infoColor;
export const buttonInfoHasBorderBgcolor = transparent;
export const buttonInfoHasBorderActiveBgcolor = lighten(0.3, buttonInfoHasBorderFgcolor);
export const buttonInfoBorderColor = buttonInfoHasBorderFgcolor;
export const buttonInfoInverseActiveFgcolor = buttonLightColor;
export const buttonInfoInverseActiveBgcolor = buttonInfoHasBorderFgcolor;
export const buttonInfoInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonInfoFgcolor = buttonLightColor;
export const buttonInfoBgcolor = infoColor;
export const buttonInfoActiveBgcolor = darken(0.2, infoColor);
// background gradient - 背景渐变
export const buttonInfoBggradientStartColor = lighten(0.1, buttonInfoBgcolor);
export const buttonInfoBggradientEndColor = darken(0.15, buttonInfoBgcolor);
export const buttonInfoActiveBggradientStartColor = buttonInfoBggradientStartColor;
export const buttonInfoActiveBggradientEndColor = buttonInfoBggradientEndColor;
/* info end - 信息 - 结束 */

/* danger start - 危险 开始 */
// has border - 有边框
export const buttonDangerHasBorderFgcolor = dangerColor;
export const buttonDangerHasBorderBgcolor = transparent;
export const buttonDangerHasBorderActiveBgcolor = lighten(0.5, buttonDangerHasBorderFgcolor);
export const buttonDangerBorderColor = buttonDangerHasBorderFgcolor;
export const buttonDangerInverseActiveFgcolor = buttonLightColor;
export const buttonDangerInverseActiveBgcolor = buttonDangerHasBorderFgcolor;
export const buttonDangerInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonDangerFgcolor = buttonLightColor;
export const buttonDangerBgcolor = dangerColor;
export const buttonDangerActiveBgcolor = darken(0.1, dangerColor);
// background gradient - 背景渐变
export const buttonDangerBggradientStartColor = lighten(0.1, buttonDangerBgcolor);
export const buttonDangerBggradientEndColor = darken(0.15, buttonDangerBgcolor);
export const buttonDangerActiveBggradientStartColor = buttonDangerBggradientStartColor;
export const buttonDangerActiveBggradientEndColor = buttonDangerBggradientEndColor;
/* danger end - 危险 - 结束 */

/* warning start - 警告 开始 */
// has border - 有边框
export const buttonWarningHasBorderFgcolor = warningColor;
export const buttonWarningHasBorderBgcolor = transparent;
export const buttonWarningHasBorderActiveBgcolor = lighten(0.3, buttonWarningHasBorderFgcolor);
export const buttonWarningBorderColor = buttonWarningHasBorderFgcolor;
export const buttonWarningInverseActiveFgcolor = buttonLightColor;
export const buttonWarningInverseActiveBgcolor = buttonWarningHasBorderFgcolor;
export const buttonWarningInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonWarningFgcolor = buttonLightColor;
export const buttonWarningBgcolor = warningColor;
export const buttonWarningActiveBgcolor = darken(0.3, warningColor);
// background gradient - 背景渐变
export const buttonWarningBggradientStartColor = lighten(0.1, buttonWarningBgcolor);
export const buttonWarningBggradientEndColor = darken(0.15, buttonWarningBgcolor);
export const buttonWarningActiveBggradientStartColor = buttonWarningBggradientStartColor;
export const buttonWarningActiveBggradientEndColor = buttonWarningBggradientEndColor;
/* warning end - 警告 - 结束 */

/* custom start - 自定义 开始 */
// has border - 有边框
export const buttonCustomHasBorderFgcolor = generalColor2;
export const buttonCustomHasBorderBgcolor = transparent;
export const buttonCustomHasBorderActiveBgcolor = darken(0.1, buttonLightColor);
export const buttonCustomBorderColor = generalColor8;
export const buttonCustomInverseActiveFgcolor = buttonLightColor;
export const buttonCustomInverseActiveBgcolor = buttonCustomHasBorderFgcolor;
export const buttonCustomInverseActiveBorderColor = buttonCustomHasBorderFgcolor;
export const buttonCustomInverseActiveHalfpxBorderColor = transparent;
// no border - 无边框
export const buttonCustomFgcolor = generalColor2;
export const buttonCustomBgcolor = buttonLightColor;
export const buttonCustomActiveBgcolor = darken(0.15, buttonLightColor);
// background gradient - 背景渐变
export const buttonCustomBggradientStartColor = lighten(0.1, buttonCustomBgcolor);
export const buttonCustomBggradientEndColor = darken(0.15, buttonCustomBgcolor);
export const buttonCustomActiveBggradientStartColor = buttonCustomBggradientStartColor;
export const buttonCustomActiveBggradientEndColor = buttonCustomBggradientEndColor;
/* custom end - 自定义 - 结束 */

/* disabled start - 禁用 开始 */
// has border - 有边框
export const buttonDisabledHasBorderFgcolor = disabledColor;
// background uses transparent color by default - 背景默认使用透明色
export const buttonDisabledHasBorderBgcolor = transparent;
export const buttonDisabledHasBorderActiveBgcolor = transparent;
// border uses text color by default - 边框默认使用文本颜色
export const buttonDisabledBorderColor = lighten(0.1, buttonDisabledHasBorderFgcolor);
// no border - 无边框
export const buttonDisabledFgcolor = lighten(0.15, disabledColor);
export const buttonDisabledBgcolor = disabledColor;
export const buttonDisabledActiveBgcolor = disabledColor;
export const buttonDisabledBggradientStartColor = lighten(0.1, buttonDisabledBgcolor);
export const buttonDisabledBggradientEndColor = darken(0.15, buttonDisabledBgcolor);
export const buttonDisabledActiveBggradientStartColor = buttonDisabledBggradientStartColor;
export const buttonDisabledActiveBggradientEndColor = buttonDisabledBggradientEndColor;
// disabled opacity - 禁用不透明度
// has border - 有边框
export const buttonOpacityDisabledHasBorderFgcolor = disabledColor;
// background uses transparent color by default - 背景默认使用透明色
export const buttonOpacityDisabledHasBorderBgcolor = transparent;
export const buttonOpacityDisabledHasBorderActiveBgcolor = transparent;
// border uses text color by default - 边框默认使用文本颜色
export const buttonOpacityDisabledBorderColor = lighten(0.1, buttonOpacityDisabledHasBorderFgcolor);
// no border - 无边框
export const buttonOpacityDisabledFgcolor = lighten(0.15, disabledColor);
export const buttonOpacityDisabledBgcolor = disabledColor;
export const buttonOpacityDisabledActiveBgcolor = disabledColor;
/* disabled end - 禁用 结束 */
