# Seven fish 前端UI框架

## ```<qgy-button>```组件

+ iconClass：自定义图标名称，默认为空
+ type:string类型，接受参数有default,primary,success，默认为default
+ iconDirection:图标位置,接受参数有left,right,默认为left
+ loading:是否显示loading，接受一个boolean，默认为false

## ```<qgy-link>```组件

+ type:string类型，接受参数有default,primary,success，默认为default
+ link:string类型，接受一个链接

## ```<qgy-tag>```组件

+ userClass：string类型，用户自定义class,默认为空
+ type：string类型，接受参数有default,primary,success，默认为default

## ```<qgy-switch>```组件

+ type：string类型，接受参数有default,primary,success，默认为default
+ bgColor：string类型，状态为on时的背景颜色，默认为空
+ offBgColor:string类型，状态为off时的背景颜色,默认为空
+ ballColor：string类型，开关圆点颜色，默认为蓝色
+ fontColor：string类型，字体颜色，默认为空

## ```<qgy-icon>```组件

+ icon:string类型，自定义图标名称，默认为空

## ```<qgy-row>```组件

+ gutter：[string,Number]类型，子元素之间的间隔距离
+ align:String类型,接受参数有left,right,center

## ```<qgy-col>```组件

+ span:[string,Number]类型，元素占据的宽度，默认为占据满行
+ offset:[string,Number]类型，元素的偏移距离
+ xs:手机上元素占据大小,>576px
+ sm:平板上元素占据大小,577px>且<768px
+ md:中等PC屏幕上元素占据大小,769px>且<1200px
+ lg:超大PC屏幕上元素占据大小,>1200px
+ 以上四个接受一个对象,对象内有span和offset两个属性

## 添加```<qgy-layout>``````<qgy-header>``````<qgy-sider>``````<qgy-content>``````<qgy-footer>```组件

## ```Toast```组件

+ message:显示的信息，默认为空
+ duration:多少秒以后关闭，默认为3000ms
+ close:是否显示关闭按钮，默认为false
+ position:消息显示的位置，有top,bottom,middle,默认为bottom
+ closeText:关闭按钮的文本
+ callback:回调函数，可在点击关闭按钮后触发，
+ full:是否占据整个屏幕宽度

## ```<qgy-progress>```组件

+ percentage:[string,number]类型，用于决定进度条的多少
+ type:string类型,进度条类型，可选值有default,primary,success，默认为default

## ```<qgy-tab>```组件

+ direction：是横向排列还是纵向排列,horizontal和vertical，默认为horizontal
+ selected:选中的是哪个tab,必须传入String类型的值
+ fn:tab的函数事件

## ```<qgy-tab-item>```组件
+ name：tab-item的名称，必须传入String类型
+ icon:给tab-item添加图标，string类型
## ```<qgy-collapse>```组件
+ selected：当前选中的项，Number类型
+ ```<qgy-collapse-item>```子组件
    - name:required
    - title:标题
    - content:显示的内容
