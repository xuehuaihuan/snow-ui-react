import React from 'react';
import { Spinner } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import { StyledSpinnerImage } from './styles/SpinnerImage';
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor,
} from '../../lib/common/theme';

const SpinnerImage = () => {
  return (
    <>
      <StyledSpinnerImage className='section-item'>
        <ExamplesHeader>
          spinner builtin svg image - 旋转器内置svg图像
        </ExamplesHeader>
        <ExampleList
          inline
          className='spinner-list'
        >
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
              effect='image'
            />
            <p className='subtitle color-major'>default image: 拖尾旋转 - 默认图像：拖尾旋转</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              effect='image'
              image={{
                src: 'audio',
                fill: true,
              }}
            />
            <p className='subtitle color-minor'>audio - 音频</p>
          </ExampleList.Item>
          <ExampleList.Item className='spinner-plain-container'>
            <Spinner
              fgcolor={plainColor}
              effect='image'
              image={{
                src: 'ball-triangle',
                stroke: true,
              }}
            />
            <p className='subtitle color-plain'>球三角 - ball triangle</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={successColor}
              effect='image'
              image={{
                src: 'circle-grid',
                fill: true,
              }}
            />
            <p className='subtitle color-success'>circle grid - 圆格子</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={infoColor}
              effect='image'
              image={{
                src: 'circles',
                fill: true,
              }}
            />
            <p className='subtitle color-info'>circles - 多个圆</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
              effect='image'
              image={{
                src: 'line-bounce',
                fill: true,
              }}
            />
            <p className='subtitle color-danger'>line bounce - 直线弹跳</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={warningColor}
              effect='image'
              image={{
                src: 'ring-ripple',
                stroke: true,
              }}
            />
            <p className='subtitle color-warning'>ring ripple - 波纹环</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
              effect='image'
              image={{
                src: 'ring-smoke',
                stroke: true,
              }}
            />
            <p className='subtitle color-major'>ring smoke - 烟圈</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              effect='image'
              image={{
                src: 'ring',
                stroke: true,
              }}
            />
            <p className='subtitle color-minor'>ring - 环</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              effect='image'
              fgcolor={successColor}
              image={{
                src: 'multiple-circles-fade',
                stroke: true,
                fill: true,
              }}
            />
            <p className='subtitle color-success'>multiple circles fade - 多圆淡化</p>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              only SVG image can change skin
              -
              只有svg图像才能更换皮肤；
            </li>
            <li>
              other types of image can not only change skin, but also may deform
              -
              其他类型图像不仅不能更换皮肤，还可能会变形；
            </li>
            <li>
              if image.builtin is false, image.src must be the image path
              -
              如果image.builtin为false，image.src必须是图像路径；
            </li>
          </ol>
        </div>
      </StyledSpinnerImage>
      <StyledSpinnerImage className='section-item'>
        <ExamplesHeader>
          spinner import external svg image - 旋转器引入外部svg图像
        </ExamplesHeader>
        <ExampleList
          inline
          className='spinner-list'
        >
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/ball-bounce.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-major'>ball bounce - 球跳动</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/comet-tail-spin.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-minor'>comet tail spin - 彗尾旋转</p>
          </ExampleList.Item>
          <ExampleList.Item className='spinner-plain-container'>
            <Spinner
              fgcolor={plainColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/crescent-ring-spin.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-plain'>crescent ring spin - 月牙环旋转</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={successColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/dual-ring-spin.svg'),
                builtin: false,
                stroke: true,
              }}
            />
            <p className='subtitle color-success'>dual ring - 双环旋转</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={infoColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/messenge-typing.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-info'>messenge typing - 消息键入</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/multiple-balls-spin.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-danger'>multiple balls spin - 多球旋转</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/music-note-bounce.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-warning'>music note bounce - 音符弹跳</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/text-entering.svg'),
                builtin: false,
                stroke: true,
                fill: true,
              }}
            />
            <p className='subtitle color-minor'>text entering - 文本输入</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={infoColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/wave-ball-bounce.svg'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-info'>wave ball bounce - 波浪球弹跳</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
              effect='image'
              image={{
                src: require('../../assets/svg/loading/leaves-spin.svg'),
                builtin: false,
                stroke: true,
                fill: true,
                stopColor: true,
              }}
            />
            <p className='subtitle color-danger'>leaves spin - 叶子旋转</p>
            <p className='subtitle color-danger'>color cannot be overwritten - 颜色无法被覆盖</p>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              the imported external SVG image needs to be in the same domain as the current project
              -
              引入的外部svg图像，需要和当前项目在同一个域下；
            </li>
            <li>
              if the SVG image is the color set by the fill, stroke, and stopColor attributes, you can change the corresponding image.fill, image.stroke, and image.stopColor to true to overwrite the color
              -
              如果SVG的图像是通过fill、stroke、stopColor属性设置的颜色，可以将相应的image.fill、image.stroke、image.stopColor修改为true即可覆盖其颜色；
            </li>
            <li>
             leaves spin set the color in a way other than fill, stroke and stopcolor. The color cannot be overwritten
              -
              叶子旋转采用fill、stroke、stopColor之外的方式设置颜色，其颜色无法被覆盖；
            </li>
          </ol>
        </div>
      </StyledSpinnerImage>
      <StyledSpinnerImage className='section-item'>
        <ExamplesHeader>
          spinner import external gif image - 旋转器引入外部gif图像
        </ExamplesHeader>
        <ExampleList
          inline
          className='spinner-list'
        >
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
              effect='image'
              image={{
                src: require('../../assets/img/loading/circle-fade.gif'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-major'>circle fade - 圆淡化</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              effect='image'
              image={{
                src: require('../../assets/img/loading/circle-line-fade.gif'),
                builtin: false,
                fill: true,
              }}
            />
            <p className='subtitle color-minor'>circle line fade - 圆直线淡化</p>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
             skin changing is not supported for GIF images
              -
              gif图像不支持换肤；
            </li>
            <li>
              gif image must be square, otherwise it will deform
              -
              gif图像必须是正方形，否则会变形；
            </li>
            <li>
             gif image amplification leads to blur and distortion, not recommended
              -
              gif图像放大导致模糊失真，不建议使用；
            </li>
          </ol>
        </div>
      </StyledSpinnerImage>
    </>
  );
};

export default SpinnerImage;
