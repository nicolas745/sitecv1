(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"714b":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"seedprod-modal"}},[s("div",{staticClass:"seedprod-modal-mask",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[s("div",{staticClass:"seedprod-modal-wrapper"},[s("div",{staticClass:"seedprod-modal-container"},[s("div",{staticClass:"seedprod-modal-header"},[t._t("header",[t._v(t._s(t.txt_1))])],2),s("div",{staticClass:"seedprod-modal-body"},[t._t("body",[t._v(t._s(t.txt_2))])],2)])])])])},n=[],i=s("561c"),a={data:function(){return{txt_1:Object(i["a"])("default header","coming-soon"),txt_2:Object(i["a"])("default body","coming-soon")}},name:"modal"},r=a,l=s("2877"),c=Object(l["a"])(r,o,n,!1,null,null,null);e["a"]=c.exports},b132:function(t,e,s){"use strict";s.d(e,"a",function(){return O});var o,n=s("bd86"),i=s("a4bb"),a=s.n(i),r=s("7618"),l=s("a745"),c=s.n(l),d=s("75fc"),u=(s("4917"),s("7f7f"),s("96cf"),s("3b8d")),h=s("f499"),p=s.n(h),g=(s("28a5"),s("ac6a"),s("6762"),s("2fdb"),s("a481"),s("e814")),m=s.n(g),b=(s("6b54"),s("66cb")),f=s.n(b),v=s("2ef0"),_=s.n(v),y=s("4328"),x=s.n(y),j=s("561c"),O={methods:(o={set_default_val:function(t,e,s){void 0==t[e]&&this.$set(t,e,s)},update_head_css:_.a.debounce(function(t){var e=f()(this.shared.settings.document.settings.linkColor).darken().toString();this.shared.settings.document.settings.linkDarkerColor=e;var s="";if(""!=this.shared.settings.document.settings.bgImage&&(s="url('"+this.shared.settings.document.settings.bgImage+"')"),""!=this.shared.settings.document.settings.bgImage&&""!=this.shared.settings.document.settings.bgDimming){var o=.01*this.shared.settings.document.settings.bgDimming;s="linear-gradient(0deg, rgba(0,0,0,"+o+"), rgba(0,0,0,"+o+")),url('"+this.shared.settings.document.settings.bgImage+"')"}""==s&&"g"==this.shared.settings.document.settings.bgStyle&&(s="linear"==this.shared.settings.document.settings.bgGradient.type?"linear-gradient("+this.shared.settings.document.settings.bgGradient.angle+"deg, "+this.shared.settings.document.settings.bgGradient.color1+" "+this.shared.settings.document.settings.bgGradient.color1location+"%, "+this.shared.settings.document.settings.bgGradient.color2+" "+this.shared.settings.document.settings.bgGradient.color2location+"%)":"radial-gradient(circle at "+this.shared.settings.document.settings.bgGradient.position+", "+this.shared.settings.document.settings.bgGradient.color1+" "+this.shared.settings.document.settings.bgGradient.color1location+"%, "+this.shared.settings.document.settings.bgGradient.color2+" "+this.shared.settings.document.settings.bgGradient.color2location+"%)");var n="#sp-page{color:"+this.shared.settings.document.settings.textColor+"} #sp-page .sp-header-tag-h1,#sp-page .sp-header-tag-h2,#sp-page .sp-header-tag-h3,#sp-page .sp-header-tag-h4,#sp-page .sp-header-tag-h5,#sp-page .sp-header-tag-h6{color:"+this.shared.settings.document.settings.headerColor+"}#sp-page h1,#sp-page h2,#sp-page h3,#sp-page h4,#sp-page h5,#sp-page h6{color:"+this.shared.settings.document.settings.headerColor+"; font-family:"+this.font_render(this.shared.settings.document.settings.headerFont)+";font-weight:"+this.font_variant_render(this.shared.settings.document.settings.headerFontVariant,"weight")+";font-style:"+this.font_variant_render(this.shared.settings.document.settings.headerFontVariant,"style")+"} #sp-page a{color:"+this.shared.settings.document.settings.linkColor+"} #sp-page a:hover{color:"+e+"}#sp-page .btn{background-color:"+this.shared.settings.document.settings.buttonColor+"}body{background-color:"+this.shared.settings.document.settings.bgColor+" !important; background-image:"+s+";}",i=this,a="";if(!0===this.shared.is_landing_page){var r=x.a.stringify({css:this.shared.settings.document.settings.customCss});i.axios.post(seedprod_get_namespaced_custom_css_url,r,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}).then(function(t){a=t.data,jQuery("#tmp-custom-css-style").remove(),jQuery("head").append("<style id='tmp-custom-css-style' type='text/css'></style>"),jQuery("#tmp-custom-css-style").html(n+a)})}this.shared.settings.document.settings.headCss=n},100),highlight_option_target:function(t){this.shared.highlight_option_target=t},moving:function(t,e){},scroll:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=jQuery("#seedprod-builder-view").scrollTop();jQuery("#seedprod-builder-view").scrollTop(e+t),this.shared.stop||setTimeout(function(){scroll(t)},20)}),start_move:function(){this.shared.is_moving=!0},end_move:function(t){this.shared.is_moving=!1,this.shared.stop=!1},mousePosition:function(t){console.log("event",t)},width_height_render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^\d+$/.test(t)&&(t+="px"),t},text_shadow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000000",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o="",n="0,0,0",i=f()(e);return i.getLuminance(),1==t&&(o="1px 1px 0px rgba("+n+",0.5)"),2==t&&(o="1px 1px 3px rgba("+n+",0.5)"),3==t&&(o="2px 2px 4px rgba("+n+",0.4)"),4==t&&(o="3px 3px 6px rgba("+n+",0.3)"),5==t&&(o="3px 4px 12px rgba("+n+",0.3)"),6==t&&(o="5px 5px 20px rgba("+n+",0.3)"),"custom"==t&&(o=s),o},divider_shadow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="";return 1==t&&(e="0 1px 1px rgba(0,0,0,0.2)"),2==t&&(e="0 2px 2px rgba(0,0,0,0.4)"),3==t&&(e="0 4px 4px rgba(0,0,0,0.4)"),4==t&&(e="0 6px 6px rgba(0,0,0,0.4)"),e},box_shadow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s="";return 1==t&&(s="0 1px 2px 0 rgba(0, 0, 0, 0.5)"),2==t&&(s="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.6)"),3==t&&(s="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6)"),4==t&&(s="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.5)"),5==t&&(s="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.4)"),6==t&&(s="0 25px 50px -12px rgba(0, 0, 0, 0.25)"),7==t&&(s="0 10px 6px -6px #777"),"custom"==t&&(s=e),s},border_render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return""==t&&(t="1px"),""==e&&(e="solid"),"#666666"==s&&(s="#666666"),t+"px "+e+" "+s},font_variant_render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"weight",s="",o="";return""!=t&&("weight"==e&&(s=m()(t)),"style"==e&&(o=t.replace(/[0-9]/g,""),""==o&&(o="normal"))),"weight"==e?s:o},font_render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""!=t&&!1===t.includes(",")&&(t="'"+t+"'"),t}},Object(n["a"])(o,"border_render",function(t,e,s){return""==t||0==t||""==s?"":t+"px "+e+" "+s}),Object(n["a"])(o,"padding_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return""==t&&""==e&&""==s&&""==o?(this.shared.is_theme_template&&this.shared.is_theme_template,""):(""==t&&(t=0),""==e&&(e=0),""==s&&(s=0),""==o&&(o=0),t+"px "+e+"px "+s+"px "+o+"px ")}),Object(n["a"])(o,"margin_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return""==t&&""==e&&""==s&&""==o?(t=0,s=0,o=0,e=0,t+"px "+e+"px "+s+"px "+o+"px "):(""==t&&(t=0),""==e&&(e=0),""==s&&(s=0),""==o&&(o=0),t+"px "+e+"px "+s+"px "+o+"px ")}),Object(n["a"])(o,"border_radius_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return""==t&&""==e&&""==s&&""==o?(t=0,s=0,o=0,e=0,t+"px "+e+"px "+s+"px "+o+"px "):(""==t&&(t=0),""==e&&(e=0),""==s&&(s=0),""==o&&(o=0),t+"px "+e+"px "+s+"px "+o+"px ")}),Object(n["a"])(o,"align_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"align",s="";return"align"==e&&("left"==t&&(s="left"),"right"==t&&(s="right"),"center"==t&&(s="center")),"width"==e&&(s="full"==this.block.settings.align?"100%":"auto"),s}),Object(n["a"])(o,"align_render_mobile",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"align",s="";return"align"==e&&("left"==t&&(s="left"),"right"==t&&(s="right"),"center"==t&&(s="center")),"width"==e&&(s="full"==this.block.settings.align_mobile?"100%":"auto"),s}),Object(n["a"])(o,"align_flex_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"align",s="";return"align"==e&&("left"==t&&(s="flex-start"),"right"==t&&(s="flex-end"),"center"==t&&(s="center")),"width"==e&&(s="full"==this.block.settings.align?"100%":"auto"),s}),Object(n["a"])(o,"align_flex_render_mobile",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"align",s="";return"align"==e&&("left"==t&&(s="flex-start"),"right"==t&&(s="flex-end"),"center"==t&&(s="center")),"width"==e&&(s="full"==this.block.settings.align?"100%":"auto"),s}),Object(n["a"])(o,"mobile_margin_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i="";return""==t&&""==e&&""==s&&""==o||(n?""!=t&&(i=this.margin_render(t,t,t,t)):i=this.margin_render(t,e,s,o)),i}),Object(n["a"])(o,"mobile_padding_render",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i="";return""==t&&""==e&&""==s&&""==o||(n?""!=t&&(i=this.padding_render(t,t,t,t)):i=this.padding_render(t,e,s,o)),i}),Object(n["a"])(o,"mobile_space_between_padding",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s="";return t&&("v"==e&&(s=this.padding_render("0","0",t,"0")),"h"==e&&(s=this.padding_render("0",t,"0","0"))),s}),Object(n["a"])(o,"load_font",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""!=t&&this.shared.setup_page_meta.googlefonts["Google Fonts"][t]){if(""!=e){var s={},o=!1;try{this.shared.setup_page_meta.googlefonts["Google Fonts"][t].variants.forEach(function(t){if(t.id==e)throw s})}catch(a){o=!0}!1===o&&(e="")}var n="https://fonts.googleapis.com/css?family="+t.split(" ").join("+")+":"+e+"&display=swap",i=document.createElement("link");i.rel="stylesheet",i.href=n,document.head.appendChild(i)}}),Object(n["a"])(o,"add_section",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s={id:this.uid(),type:"section",rows:[],settings:JSON.parse(p()(this.shared.block_templates.section))};this.shared.settings.document.sections.splice(e+1,0,s),this.focus_block(s.id,"bottom"),this.$router.push({name:"setup_block_options"})}),Object(n["a"])(o,"focus_layout",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",s=!0;"bottom"===e&&(s=!1),this.$nextTick(function(){this.shared.layout_container;if(void 0!==t&&null!==t)try{document.querySelector("#sp-nav-"+t).scrollIntoView(s)}catch(e){}})}),Object(n["a"])(o,"focus_block",function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var s,o,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=n.length>1&&void 0!==n[1]?n[1]:"top",o=!0,"bottom"===s&&(o=!1),this.$nextTick(function(){var t=this.shared.code_container;if(void 0!==e&&null!==e)try{t.querySelector("#sp-"+e).scrollIntoView(o)}catch(s){}});case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()),Object(n["a"])(o,"add_row",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o={id:this.uid(),type:"row",colType:"1-col",cols:[],settings:JSON.parse(p()(this.shared.block_templates.row))};this.shared.settings.document.sections[e].rows.splice(s+1,0,o),this.focus_block(o.id,"bottom"),this.$router.push({name:"setup_block_options"})}),Object(n["a"])(o,"add_col",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n={id:this.uid(),type:"col",blocks:[],settings:JSON.parse(p()(this.shared.block_templates.col))};this.shared.settings.document.sections[e].rows[s].cols.splice(o+1,0,n),this.focus_block(n.id,"bottom"),this.$router.push({name:"setup_block_options"})}),Object(n["a"])(o,"generate_cols",function(t){var e,s;"1-col"==t&&(e=1),"2-col"!=t&&"left-sidebar"!=t&&"right-sidebar"!=t||(e=2),"3-col"==t&&(e=3),"4-col"==t&&(e=4),"5-col"==t&&(e=5),"6-col"==t&&(e=6);var o=[];for(s=0;s<e;s++){var n={id:this.uid(),type:"col",blocks:[],settings:JSON.parse(p()(this.shared.block_templates.col))};("left-sidebar"==t&&0==s||"right-sidebar"==t&&1==s)&&(n.settings.colWidth=35),("left-sidebar"==t&&1==s||"right-sidebar"==t&&0==s)&&(n.settings.colWidth=65),o.push(n)}return o}),Object(n["a"])(o,"add_cols",function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=this.generate_cols(t);this.shared.settings.document.sections[s].rows[o].cols=n}),Object(n["a"])(o,"goto",function(t){this.$route.name!==t&&this.$router.push({name:t})}),Object(n["a"])(o,"add_block",function(){this.$router.push({name:"setup_block_options"})}),Object(n["a"])(o,"duplicate_element",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=JSON.parse(p()(t));if(null!==e&&null!==s&&null!==o&&null!==n)a.id=this.uid(),this.shared.settings.document.sections[e].rows[s].cols[o].blocks.splice(n+1,0,a);else if(null!==e&&null!==s&&null!==o){var r=this;a.id=this.uid(),a.blocks.forEach(function(t){t.id=r.uid()}),this.shared.settings.document.sections[e].rows[s].cols.splice(o+1,0,a)}else if(null!==e&&null!==s){var l=this;a.id=this.uid(),a.cols.forEach(function(t){t.id=l.uid(),t.blocks.forEach(function(t){t.id=l.uid()})}),this.shared.settings.document.sections[e].rows.splice(s+1,0,a)}else if(null!==e){var c=this;a.id=this.uid(),a.rows.forEach(function(t){t.id=c.uid(),t.cols.forEach(function(t){t.id=c.uid(),t.blocks.forEach(function(t){t.id=c.uid()})})}),this.shared.settings.document.sections.splice(e+1,0,a)}!1===i&&(this.focus_block(a.id),this.edit_block(a.id,null,!0))}),Object(n["a"])(o,"delete_blank_element",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3];null!==t&&null!==e?this.$delete(this.shared.settings.document.sections[t].rows,e):null!==t&&this.$delete(this.shared.settings.document.sections,t)}),Object(n["a"])(o,"delete_element",function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.$swal({title:Object(j["a"])("Are you sure you want to delete?","coming-soon"),type:null,showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:Object(j["a"])("Yes, delete it!","coming-soon")}).then(function(i){i.value&&(null!==e&&null!==s&&null!==o&&null!==n?t.$delete(t.shared.settings.document.sections[e].rows[s].cols[o].blocks,n):null!==e&&null!==s&&null!==o?1==t.shared.settings.document.sections[e].rows[s].cols.length?t.shared.settings.document.sections[e].rows[0].cols=[]:t.$delete(t.shared.settings.document.sections[e].rows[s].cols,o):null!==e&&null!==s?1==t.shared.settings.document.sections[e].rows.length?t.shared.settings.document.sections[e].rows[0].cols=[]:t.$delete(t.shared.settings.document.sections[e].rows,s):null!==e&&t.$delete(t.shared.settings.document.sections,e),t.$router.push({name:"setup_block_options"}),t.$swal({imageUrl:t.shared.plugin_path+"public/svg/success-24px-white.svg",text:"Deleted",toast:!0,type:null,customClass:"sp-toast-error",position:"top-end",showConfirmButton:!1,timer:3e3}))})}),Object(n["a"])(o,"edit_block",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return 0==o&&this.focus_layout(t),(this.shared.highlight_option_target==t||!1!==s)&&(0!==e&&void(this.$route.params.blockid!=t&&this.$router.push({name:"setup_block_options",params:{id:this.shared.lpage.id,blockid:t}})))}),Object(n["a"])(o,"uid",function(){var t=String.fromCharCode(97+Math.floor(26*Math.random()))+Math.random().toString(36).substring(2,7).toLowerCase();return t}),Object(n["a"])(o,"help_iframe",function(t){var e=t.split("#"),s="";e[1]&&(t=e[0],s=e[1]),this.$swal({width:600,html:"<iframe class='iframe_loading' id='inline-help' src='https://staging.seedprod.com/docs/"+t+"?iframe=1&hash="+s+"' style='width:100%;' onload='help_iframe()'></iframe>",toast:!1,showCancelButton:!0,cancelButtonText:"Close",confirmButtonText:Object(j["a"])('Visit Docs&nbsp;<i class="fas fa-external-link-alt"></i>',"coming-soon")}).then(function(e){if(e.value){var o="https://staging.seedprod.com/docs/"+t+"#"+s;window.open(o,"_blank")}})}),Object(n["a"])(o,"show_upgrade_notice",function(t,e){var s=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"link",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=this;n?(t=Object(j["a"])("Upgrade to PRO","coming-soon"),e=Object(j["a"])("Increase traffic, engagement, and get more email subscribers. Click below to learn more about all our awesome features.","coming-soon")):(t+=Object(j["a"])(" is a PRO Feature","coming-soon"),e=Object(j["a"])("We're sorry, the ","coming-soon")+e+Object(j["a"])(" feature is not available on your plan. Please upgrade to the PRO plan to unlock all these awesome features.","coming-soon")),this.$swal({customContainerClass:"seedprod-upgrade-popup",imageUrl:i.shared.plugin_path+"public/img/lock.svg",title:t,text:e,type:null,showCancelButton:!1,confirmButtonColor:"#4CAF50",cancelButtonColor:"#d33",confirmButtonText:Object(j["a"])("UPGRADE TO PRO","coming-soon"),showCloseButton:!0,footer:'<i class="fas fa-check-circle"></i><div style="text-align:center;margin-left:40px;margin-right:40px;">'+Object(j["a"])("<strong>Bonus:</strong>&nbsp;SeedProd Lite users get a discount off the regular price, automatically applied at checkout.","coming-soon")+"</div>"}).then(function(t){t.value&&(window.open(s.shared.upgrade_link+o,"_blank"),s.$swal.fire({customContainerClass:"seedprod-moreinfo-popup",imageUrl:i.shared.plugin_path+"public/img/info-with-circle.svg",type:null,html:Object(j["a"])("Thanks for your interest in SeedProd Pro!<br>If you have any questions or issues just <a href='https://www.seedprod.com/?contact=1' target='_blank'>let us know</a>.<br><br>After purchasing SeedProd Pro, you'll need to download and install the Pro version of the plugin, and then remove the free plugin. <br><br>(Don't worry, all your settings will be preserved.)","coming-soon")}))})}),Object(n["a"])(o,"show_uplock_notice",function(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=this;s?(t=Object(j["a"])("Upgrade to PRO","coming-soon"),e=Object(j["a"])("Increase traffic, engagement, and get more email subscribers. Click below to learn more about all our awesome features.","coming-soon")):(t=Object(j["a"])("Upgrade to Unlock ","coming-soon")+t,e=Object(j["a"])("We're sorry, the ","coming-soon")+e+Object(j["a"])(" feature is not available on your plan. Please upgrade your plan to unlock this feature and more!","coming-soon")),this.$swal({customContainerClass:"seedprod-upgrade-popup",imageUrl:o.shared.plugin_path+"public/img/lock.svg",title:t,text:e,type:null,showCancelButton:!1,confirmButtonColor:"#4CAF50",cancelButtonColor:"#d33",confirmButtonText:"UPGRADE",showCloseButton:!0,footer:Object(j["a"])("Upgrade with just a click of a button!","coming-soon")}).then(function(t){t.value&&window.open("https://app.seedprod.com/upgrade-license?license_key="+o.shared.license_key+"&api_token="+o.shared.api_token,"_blank")})}),Object(n["a"])(o,"debounce_update_mobile_css",_.a.debounce(function(t){jQuery("#tmp-custom-mobile-css-style").remove(),jQuery("head").append("<style id='tmp-custom-mobile-css-style' type='text/css'></style>"),jQuery("#tmp-custom-mobile-css-style").html(this.generate_mobile_css())},100)),Object(n["a"])(o,"update_mobile_css",function(){jQuery("#tmp-custom-mobile-css-style").remove(),jQuery("head").append("<style id='tmp-custom-mobile-css-style' type='text/css'></style>"),jQuery("#tmp-custom-mobile-css-style").html(this.generate_mobile_css())}),Object(n["a"])(o,"generate_mobile_css",function(){var t=document.documentElement.innerHTML,e=/data-mobile-css="([^"]*)"/g,s=[];lodash.isEmpty(t.match(e))||(s=Object(d["a"])(t.match(e)));var o="";return lodash.isEmpty(s)||s.forEach(function(t){var e=t.match(/"([^"]+)"/);if(c()(e)){for(var s=e[1].split("|"),n=s[0],i=s[1],a=n.split(","),r=a.length,l="",d=0;d<r;d++)lodash.isEmpty(a[d])||(l+=0===d?".sp-mobile-view ".concat(a[d]):", .sp-mobile-view ".concat(a[d]));for(var u=i.split(";"),h=u.length,p="".concat(l," {"),g=0;g<h;g++)lodash.isEmpty(u[g])||(p+="".concat(u[g].replace(";","")," !important;"));p+="}",o+=p}}),this.shared.settings.document.settings.mobileCss=o,o}),Object(n["a"])(o,"generate_mobile_css_old",function(){var t="",e=this.traverse(seedprod_store.settings.document,this.process);return e.forEach(function(e){var s=e.split(",");if(!1===lodash.isEmpty(s[2])){o=="sp-"+s[0]&&!1;var o="sp-"+s[0],n=lodash.kebabCase(s[1].replace("_mobile","")),i=s[2];t=t+".sp-mobile-view #"+o+".sp-css-target{",t="line-height"==n?t+n+":"+i+" !important;":t+n+":"+i+"px !important;",t+=" }",t=t+".sp-mobile-view #"+o+" .sp-css-target{",t="line-height"==n?t+n+":"+i+" !important;":t+n+":"+i+"px !important;",t+=" }"}}),this.shared.settings.document.settings.mobileCss=t,t}),Object(n["a"])(o,"process",function(t,e,s,o){-1!==t.indexOf("_mobile")&&!1===!!~o.indexOf(e)&&o.push(s+","+t+","+e)}),Object(n["a"])(o,"traverse",function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];for(var n in t)0===n.indexOf("id")&&(s=t[n]),e.apply(this,[n,t[n],s,o]),null!==t[n]&&"object"==Object(r["a"])(t[n])&&this.traverse(t[n],e,s,o);return o}),Object(n["a"])(o,"debounce_update_mobile_visibility_css",_.a.debounce(function(t){jQuery("#tmp-custom-mobile-visibility-css-style").remove(),jQuery("head").append("<style id='tmp-custom-mobile-visibility-css-style' type='text/css'></style>"),jQuery("#tmp-custom-mobile-visibility-css-style").html(this.generate_mobile_visibility_css())},100)),Object(n["a"])(o,"update_mobile_visibility_css",function(){jQuery("#tmp-custom-mobile-visibility-css-style").remove(),jQuery("head").append("<style id='tmp-custom-mobile-visibility-css-style' type='text/css'></style>"),jQuery("#tmp-custom-mobile-visibility-css-style").html(this.generate_mobile_visibility_css())}),Object(n["a"])(o,"generate_mobile_visibility_css",function(){var t=document.documentElement.innerHTML,e=/data-mobile-visibility="([^"]*)"/g,s=[];lodash.isEmpty(t.match(e))||(s=Object(d["a"])(t.match(e)));var o="",n="";return lodash.isEmpty(s)||s.forEach(function(t){var e=t.match(/"([^"]+)"/);if(c()(e)){var s=e[1].split("|"),i=s[0],a=s[1];"true"===a&&(o+=".sp-mobile-view ".concat(i," {"),o+="opacity: .2;",o+="border: 1px solid rgba(0,0,0,.02);",o+="}",n+="".concat(i," {"),n+="display: none !important;",n+="}")}}),this.shared.settings.document.settings.mobileVisibilityCss=n,o}),Object(n["a"])(o,"debounce_update_desktop_visibility_css",_.a.debounce(function(t){jQuery("#tmp-custom-desktop-visibility-css-style").remove(),jQuery("head").append("<style id='tmp-custom-desktop-visibility-css-style' type='text/css'></style>"),jQuery("#tmp-custom-desktop-visibility-css-style").html(this.generate_desktop_visibility_css())},100)),Object(n["a"])(o,"update_desktop_visibility_css",function(){jQuery("#tmp-custom-desktop-visibility-css-style").remove(),jQuery("head").append("<style id='tmp-custom-desktop-visibility-css-style' type='text/css'></style>"),jQuery("#tmp-custom-desktop-visibility-css-style").html(this.generate_desktop_visibility_css())}),Object(n["a"])(o,"generate_desktop_visibility_css",function(){var t=document.documentElement.innerHTML,e=/data-desktop-visibility="([^"]*)"/g,s=[];lodash.isEmpty(t.match(e))||(s=Object(d["a"])(t.match(e)));var o="",n="";return lodash.isEmpty(s)||s.forEach(function(t){var e=t.match(/"([^"]+)"/);if(c()(e)){var s=e[1].split("|"),i=s[0],a=s[1];"true"===a&&(o+=".sp-desktop-view ".concat(i," {"),o+="opacity: .2;",o+="border: 1px solid rgba(0,0,0,.02);",o+="}",n+="".concat(i," {"),n+="display: none !important;",n+="}")}}),this.shared.settings.document.settings.desktopVisibilityCss=n,o}),Object(n["a"])(o,"debounce_update_placeholder_css",_.a.debounce(function(t){jQuery("#tmp-custom-placeholder-css-style").remove(),jQuery("head").append("<style id='tmp-custom-placeholder-css-style' type='text/css'></style>"),jQuery("#tmp-custom-placeholder-css-style").html(this.generate_placeholder_css())},100)),Object(n["a"])(o,"update_placeholder_css",function(){jQuery("#tmp-custom-placeholder-css-style").remove(),jQuery("head").append("<style id='tmp-custom-placeholder-css-style' type='text/css'></style>"),jQuery("#tmp-custom-placeholder-css-style").html(this.generate_placeholder_css())}),Object(n["a"])(o,"generate_placeholder_css",function(){var t="",e=this.traverse(seedprod_store.settings.document,this.process_placeholder);return e.forEach(function(e){var s=e.split(",");if(!1===lodash.isEmpty(s[2])){o=="sp-"+s[0]&&!1;var o="sp-"+s[0],n=s[2],i=f()(n).setAlpha(.7);t=t+"input::placeholder, #"+o+" input::placeholder {",t=t+"color:"+i,t+=" }"}}),this.shared.settings.document.settings.placeholderCss=t,t}),Object(n["a"])(o,"process_placeholder",function(t,e,s,o){-1!==t.indexOf("fieldTextColor")&&!1===!!~o.indexOf(e)&&o.push(s+","+t+","+e)}),Object(n["a"])(o,"generate_css_from_object",function(t){var e=JSON.parse(p()(t));return a()(e).forEach(function(t){return!e[t]&&void 0!==e[t]&&delete e[t]}),p()(e).replace(/['"]+/g,"").replace(/[,]+/g,";")}),o)}},f408:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"sp-text-center sp-w-full"},[s("div",[s("h1",{staticClass:"sp-mb-4 sp-leading-tight sp-text-2xl sp-font-bold sp-text-neutral"},[t._v("\n          "+t._s(this.feature)+" is a PRO Feature\n        ")]),s("p",{staticClass:"sp-mb-8 sp-text-base"},[t._v("\nWe're sorry, "+t._s(t.feature)+" is not available on your plan. Please upgrade to the PRO version to unlock all these awesome features.\n        ")]),s("a",{staticClass:"sp-bg-green sp-px-8 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-green-lighter sp-cursor-pointer sp-font-semibold sp-inline-flex sp-items-center sp-justify-center hover:sp-text-white",staticStyle:{color:"#fff !important"},attrs:{href:"https://seedprod.com/lite-upgrade/?utm_source=WordPress&utm_campaign=liteplugin&utm_medium=pluginbuilder-"+t.feature_source,target:"_blank"}},[s("svg",{staticClass:"sp-fill-current sp-mr-2 sp-w-5 sp-h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}}),s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),t._v(" Upgrade to SeedProd PRO Now\n        ")]),s("div",{staticClass:"sp-mt-3 sp-text-primary sp-text-lg sp-font-bold"},[t._v("Special Upgrade Offer - Save 50% Off")])])])])},n=[],i=s("bd86"),a=s("561c"),r=s("4328"),l=s.n(r),c={name:"LiteCTASubscribers",data:function(){var t;return t={txt_1:Object(a["a"])("Dismiss this message","coming-soon"),txt_2:Object(a["a"])("Get SeedProd Pro and Unlock all the Powerful Features","coming-soon"),txt_3:Object(a["a"])("Thanks for being a loyal SeedProd Lite user. Upgrade to\nSeedProd Pro to unlock all the awesome features and\nexperience why SeedProd is the best WordPress landing\npage plugin.","coming-soon"),txt_4:Object(a["a"])("Pro Features:","coming-soon"),txt_995:Object(a["a"])("Drag & Drop Page Builder","coming-soon"),txt_996:Object(a["a"])("80+ PRO Page Blocks","coming-soon"),txt_997:Object(a["a"])("PRO Email Marketing Integrations","coming-soon"),txt_998:Object(a["a"])("Custom 404 Pages","coming-soon"),txt_999:Object(a["a"])("Page Access Controls","coming-soon"),txt_9910:Object(a["a"])("200+ PRO Page Templates","coming-soon"),txt_9911:Object(a["a"])("PRO Smart Sections","coming-soon"),txt_9912:Object(a["a"])("Email Subscriber Management","coming-soon"),txt_9913:Object(a["a"])("Saved Templates","coming-soon"),txt_9914:Object(a["a"])("Plus much more...","coming-soon"),txt_15:Object(a["a"])("Bonus:","coming-soon")},Object(i["a"])(t,"txt_15",Object(a["a"])("Bonus:","coming-soon")),Object(i["a"])(t,"txt_16",Object(a["a"])("SeedProd Lite users get","coming-soon")),Object(i["a"])(t,"txt_17",Object(a["a"])("a discount off the regular price","coming-soon")),Object(i["a"])(t,"txt_18",Object(a["a"])("automatically applied at checkout.","coming-soon")),Object(i["a"])(t,"txt_19",Object(a["a"])("Get SeedProd Pro Today and Unlock all the Powerful Features »","coming-soon")),t},props:{feature_source:{type:String,default:""},feature:{type:String,default:""}},methods:{dismiss:function(){var t=this,e=l.a.stringify({dismiss:!0});this.shared.settings_page_meta.dismiss_settings_lite_cta=!0,t.axios.post(seedprod_dismiss_settings_lite_cta_url,e,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"})}}},d=c,u=s("2877"),h=Object(u["a"])(d,o,n,!1,null,null,null);e["a"]=h.exports}}]);