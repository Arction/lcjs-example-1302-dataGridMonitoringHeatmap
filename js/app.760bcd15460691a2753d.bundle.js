(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const a=s(475),n=s(27),{AxisScrollStrategies:l,AxisTickStrategies:r,emptyLine:i,synchronizeAxisIntervals:o,lightningChart:u,LegendBoxBuilders:d,UIElementBuilders:g,UIOrigins:m,Themes:x}=a,{createProgressiveTraceGenerator:c}=n,p=[{name:"Trend #1"},{name:"Trend #2"},{name:"Trend #3"}],v=p.length,C=u().Dashboard({numberOfColumns:1,numberOfRows:2}).setRowHeight(0,1).setRowHeight(1,.4),h=C.createChartXY({columnIndex:0,rowIndex:0}).setTitle("Real-Time Chart + DataGrid"),y=C.createDataGrid({columnIndex:0,rowIndex:1}).setTitle("").setColumnContent(0,["",...p.map((e=>e.name))]).setRowContent(0,["","Latest value","Previous value","value 15 s"]),T=p.map((e=>h.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setDataCleaning({minDataPointCount:1}).setName(e.name))),f=h.getDefaultAxisX().setScrollStrategy(l.progressive).setInterval({start:-6e4,end:0,stopAxisAfter:!1}).setTickStrategy(r.Time),S=h.addAxisX({opposite:!0}).setTickStrategy(r.Empty).setStrokeStyle(i).setMouseInteractions(!1);o(f,S);const A=S.addCustomTick(g.AxisTickMajor).setTextFormatter((e=>"-15 s")),I=h.addLegendBox(d.HorizontalLegendBox,{x:h.getDefaultAxisX(),y:h.getDefaultAxisY()}).add(h),k=()=>{I.setOrigin(m.CenterBottom).setPosition({x:(h.getDefaultAxisX().getInterval().start+h.getDefaultAxisX().getInterval().end)/2,y:h.getDefaultAxisY().getInterval().start})};h.forEachAxis((e=>e.onIntervalChange(k)));const D=C.getTheme(),w=D.examples.positiveTextFillStyle,F=D.examples.negativeTextFillStyle,B=D.examples.positiveBackgroundFillStyle,P=D.examples.negativeBackgroundFillStyle;Promise.all(new Array(v).fill(0).map((e=>c().setNumberOfPoints(5e4).generate().toPromise().then((e=>e.map((e=>100+e.y))))))).then((e=>{const t=p.map((()=>({previous:0,previous15s:0}))),s=Date.now();let a=0;const n=setInterval((()=>{((e,a)=>{const n=Date.now();T.forEach(((t,a)=>t.add({x:n-s,y:e[a]}))),a&&(t.forEach(((t,s)=>{t.previous15s=e[s]})),setInterval((()=>{t.forEach(((e,t)=>{e.previous15s=e.previous})),A.setValue(Date.now()-s)}),15e3)),e.forEach(((e,s)=>{const a=t[s],n=e,l=a.previous,r=a.previous15s;y.setCellContent(1,s+1,`${n.toFixed(1)}`).setCellTextFillStyle(1,s+1,n>l?w:F).setCellBackgroundFillStyle(1,s+1,n>l?B:P).setCellContent(2,s+1,`${l.toFixed(1)}`).setCellTextFillStyle(2,s+1,l>r?w:F).setCellBackgroundFillStyle(2,s+1,l>r?B:P).setCellContent(3,s+1,`${r.toFixed(1)}`),a.previous=n}))})(new Array(v).fill(0).map(((t,s)=>e[s][a])),0===a),a+=1,a>=5e4&&clearInterval(n)}),50)}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);