import{j as e}from"./index-XodCb-4W.js";import{g as ce,c as xe,s as j,T as he,S as me,w as pe,u as fe,a as X,b as G,d as be,e as je,f as Be,h as Te,i as O,X as i,Y as V}from"./index-DpFiadre.js";import{R as ye,r as R}from"./index-J9LxNlkQ.js";import"./index-B4jcXgF0.js";const S=(r,{tokens:a,props:s})=>{if(!r||s.circular)return;if(typeof r=="number")return{paddingHorizontal:r*.25,height:r,borderRadius:s.circular?1e5:r*.2};const l=ce(r),o=a.radius[r]??a.radius.$true;return{paddingHorizontal:l,height:r,borderRadius:s.circular?1e5:o}},g=ye.createContext(!1);var B={};const T=xe({color:void 0,ellipse:void 0,fontFamily:void 0,fontSize:void 0,fontStyle:void 0,fontWeight:void 0,letterSpacing:void 0,maxFontSizeMultiplier:void 0,size:void 0,textAlign:void 0,variant:void 0}),Se="Button",C=j(he,{name:Se,tag:"button",context:T,role:"button",focusable:!0,variants:{unstyled:{false:{size:"$true",justifyContent:"center",alignItems:"center",flexWrap:"nowrap",flexDirection:"row",cursor:"pointer",hoverTheme:!0,pressTheme:!0,backgrounded:!0,borderWidth:1,borderColor:"transparent",focusVisibleStyle:{outlineColor:"$outlineColor",outlineStyle:"solid",outlineWidth:2}}},variant:{outlined:{backgroundColor:"transparent",borderWidth:2,borderColor:"$borderColor",hoverStyle:{backgroundColor:"transparent",borderColor:"$borderColorHover"},pressStyle:{backgroundColor:"transparent",borderColor:"$borderColorPress"},focusVisibleStyle:{backgroundColor:"transparent",borderColor:"$borderColorFocus"}}},size:{"...size":S,":number":S},disabled:{true:{pointerEvents:"none"}}},defaultVariants:{unstyled:B.TAMAGUI_HEADLESS==="1"}}),L=j(me,{name:"Button",context:T,variants:{unstyled:{false:{userSelect:"none",cursor:"pointer",flexGrow:0,flexShrink:1,ellipse:!0,color:"$color"}}},defaultVariants:{unstyled:B.TAMAGUI_HEADLESS==="1"}}),ge=r=>{const{children:a,scaleIcon:s=1}=r,{size:l,color:o}=R.useContext(T),b=(typeof l=="number"?l*.5:X(l))*s;return G({size:b,color:o})(a)},Ce=C.styleable(function(r,a){const{props:s}=$e(r);return e.jsx(C,{"data-disable-theme":!0,...s,ref:a})}),t=pe(Ce,{Text:L,Icon:ge});function $e({textProps:r,...a},{Text:s=t.Text}={Text:t.Text}){const l=R.useContext(g),o=fe(a,{noNormalize:!0,noExpand:!0}),{icon:b,iconAfter:Y,space:H,spaceFlex:M,scaleIcon:F=1,scaleSpace:N=.66,separator:U,noTextWrap:K,fontFamily:u,fontSize:q,fontWeight:J,fontStyle:Q,letterSpacing:Z,tag:ee,ellipse:te,maxFontSizeMultiplier:ne,...re}=o,d=o.size||(o.unstyled?void 0:"$true"),oe=o.color,y=(typeof d=="number"?d*.5:X(d,{font:(u==null?void 0:u[0])==="$"?u:void 0}))*F,ae=G({size:y,color:oe}),[se,le]=[b,Y].map(ae),c=H??be(y)*N,ie=K?[a.children]:je(s,{children:a.children,fontFamily:u,fontSize:q,textProps:r,fontWeight:J,fontStyle:Q,letterSpacing:Z,ellipse:te,maxFontSizeMultiplier:ne},s===L&&o.unstyled!==!0?{unstyled:B.TAMAGUI_HEADLESS==="1",size:d}:void 0),ue=Be({space:c===!1?0:c==!0?"$true":c,spaceFlex:M,ensureKeys:!0,separator:U,direction:o.flexDirection==="column"||o.flexDirection==="column-reverse"?"vertical":"horizontal",children:[se,...ie,le]}),de={size:d,...a.disabled&&{focusable:void 0,focusVisibleStyle:{borderColor:"$background"}},tag:ee??(l?"span":o.accessibilityRole==="link"||o.role==="link"?"a":"button"),...re,children:e.jsx(g.Provider,{value:!0,children:ue}),disableClassName:!0};return{spaceSize:c,isNested:l,props:de}}var ke={};const n=j(Te,{variants:{unstyled:{false:{color:"$color"}}},defaultVariants:{unstyled:ke.TAMAGUI_HEADLESS==="1"}}),We={title:"Components/Button",component:t,parameters:{layout:"centered"}},f=({children:r})=>e.jsx(V,{space:"$4",alignItems:"center",padding:"$4",backgroundColor:"$background",borderRadius:"$4",borderWidth:1,borderColor:"$borderColor",children:r}),x={render:()=>e.jsx(O,{name:"light",children:e.jsx(f,{children:e.jsxs(i,{space:"$4",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(t,{theme:"blue",children:e.jsx(n,{children:"Primary"})}),e.jsx(t,{theme:"gray",children:e.jsx(n,{children:"Secondary"})}),e.jsx(t,{variant:"outlined",theme:"blue",children:e.jsx(n,{children:"Outlined"})}),e.jsx(t,{disabled:!0,theme:"blue",children:e.jsx(n,{children:"Disabled"})})]})})})},h={render:()=>e.jsx(O,{name:"dark",children:e.jsx(f,{children:e.jsxs(i,{space:"$4",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(t,{theme:"blue",children:e.jsx(n,{children:"Primary"})}),e.jsx(t,{theme:"gray",children:e.jsx(n,{children:"Secondary"})}),e.jsx(t,{variant:"outlined",theme:"blue",children:e.jsx(n,{children:"Outlined"})}),e.jsx(t,{disabled:!0,theme:"blue",children:e.jsx(n,{children:"Disabled"})})]})})})},m={render:()=>e.jsx(f,{children:e.jsxs(i,{space:"$4",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(t,{theme:"blue",children:e.jsx(n,{children:"Default"})}),e.jsx(t,{variant:"outlined",theme:"blue",children:e.jsx(n,{children:"Outlined"})}),e.jsx(t,{variant:"secondary",theme:"blue",children:e.jsx(n,{children:"Secondary"})}),e.jsx(t,{size:"$2",theme:"blue",children:e.jsx(n,{children:"Small"})}),e.jsx(t,{size:"$6",theme:"blue",children:e.jsx(n,{children:"Large"})})]})})},p={render:()=>e.jsx(f,{children:e.jsxs(V,{space:"$4",alignItems:"center",children:[e.jsxs(i,{space:"$4",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(t,{theme:"blue",children:e.jsx(n,{children:"Blue"})}),e.jsx(t,{theme:"red",children:e.jsx(n,{children:"Red"})}),e.jsx(t,{theme:"green",children:e.jsx(n,{children:"Green"})}),e.jsx(t,{theme:"yellow",children:e.jsx(n,{children:"Yellow"})})]}),e.jsxs(i,{space:"$4",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(t,{theme:"orange",children:e.jsx(n,{children:"Orange"})}),e.jsx(t,{theme:"purple",children:e.jsx(n,{children:"Purple"})}),e.jsx(t,{theme:"pink",children:e.jsx(n,{children:"Pink"})}),e.jsx(t,{theme:"gray",children:e.jsx(n,{children:"Gray"})})]}),e.jsxs(i,{space:"$4",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(t,{theme:"blue_alt1",children:e.jsx(n,{children:"Blue Alt"})}),e.jsx(t,{theme:"red_alt1",children:e.jsx(n,{children:"Red Alt"})}),e.jsx(t,{theme:"green_alt1",children:e.jsx(n,{children:"Green Alt"})}),e.jsx(t,{theme:"yellow_alt1",children:e.jsx(n,{children:"Yellow Alt"})})]})]})})};var $,k,z;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Theme name="light">
      <Container>
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          {/* Primary Button */}
          <Button theme="blue">
            <Text>Primary</Text>
          </Button>

          {/* Secondary Button */}
          <Button theme="gray">
            <Text>Secondary</Text>
          </Button>

          {/* Outlined Button */}
          <Button variant="outlined" theme="blue">
            <Text>Outlined</Text>
          </Button>

          {/* Disabled Button */}
          <Button disabled theme="blue">
            <Text>Disabled</Text>
          </Button>
        </XStack>
      </Container>
    </Theme>
}`,...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var w,A,_;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Theme name="dark">
      <Container>
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          {/* Primary Button */}
          <Button theme="blue">
            <Text>Primary</Text>
          </Button>

          {/* Secondary Button */}
          <Button theme="gray">
            <Text>Secondary</Text>
          </Button>

          {/* Outlined Button */}
          <Button variant="outlined" theme="blue">
            <Text>Outlined</Text>
          </Button>

          {/* Disabled Button */}
          <Button disabled theme="blue">
            <Text>Disabled</Text>
          </Button>
        </XStack>
      </Container>
    </Theme>
}`,...(_=(A=h.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var W,v,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Container>
      <XStack space="$4" flexWrap="wrap" justifyContent="center">
        <Button theme="blue">
          <Text>Default</Text>
        </Button>
        <Button variant="outlined" theme="blue">
          <Text>Outlined</Text>
        </Button>
        <Button variant="secondary" theme="blue">
          <Text>Secondary</Text>
        </Button>
        <Button size="$2" theme="blue">
          <Text>Small</Text>
        </Button>
        <Button size="$6" theme="blue">
          <Text>Large</Text>
        </Button>
      </XStack>
    </Container>
}`,...(D=(v=m.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var P,E,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Container>
      <YStack space="$4" alignItems="center">
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          <Button theme="blue">
            <Text>Blue</Text>
          </Button>
          <Button theme="red">
            <Text>Red</Text>
          </Button>
          <Button theme="green">
            <Text>Green</Text>
          </Button>
          <Button theme="yellow">
            <Text>Yellow</Text>
          </Button>
        </XStack>
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          <Button theme="orange">
            <Text>Orange</Text>
          </Button>
          <Button theme="purple">
            <Text>Purple</Text>
          </Button>
          <Button theme="pink">
            <Text>Pink</Text>
          </Button>
          <Button theme="gray">
            <Text>Gray</Text>
          </Button>
        </XStack>
        {/* Alt themes for more subtle colors */}
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          <Button theme="blue_alt1">
            <Text>Blue Alt</Text>
          </Button>
          <Button theme="red_alt1">
            <Text>Red Alt</Text>
          </Button>
          <Button theme="green_alt1">
            <Text>Green Alt</Text>
          </Button>
          <Button theme="yellow_alt1">
            <Text>Yellow Alt</Text>
          </Button>
        </XStack>
      </YStack>
    </Container>
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ve=["LightThemeButtons","DarkThemeButtons","ButtonVariants","ColorVariants"];export{m as ButtonVariants,p as ColorVariants,h as DarkThemeButtons,x as LightThemeButtons,ve as __namedExportsOrder,We as default};
