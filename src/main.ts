import {desk} from "@shared/desk";

type S={scores:number[];team:number;server:number;history:number[][]};const teams=["Home","Away"];
function won(a:number,b:number){return a===30||a>=21&&a-b>=2;}
desk<S>({name:"Shuttle Score",accent:"#6DA9E9",motion:{"motif":"turnout","color":"#6DA9E9","shine":"#E2F4FF"},initial:()=>({scores:[0,0],team:0,server:0,history:[]}),
 render:s=>{const [a,b]=s.scores,done=won(a,b)||won(b,a);return {title:done?"Game over":"Shuttle score",value:a+" - "+b,
 lines:[done?teams[a>b?0:1]+" wins":"Next point: "+teams[s.team],"Serve: "+teams[s.server],
 "Court: "+(s.scores[s.server]%2?"left":"right"),"Wheel: side / click: rally","Start: undo last point","Hold Start: new game"]};},
 action:(s,k)=>{if(k==="up"||k==="down")s.team=1-s.team;if(k==="hold-start"){s.scores=[0,0];s.server=0;s.history=[];}
 if(k==="start"&&s.history.length){const last=s.history.pop()!;s.scores=[last[0],last[1]];s.server=last[2];}
 if(k==="ok"&&!won(s.scores[0],s.scores[1])&&!won(s.scores[1],s.scores[0])){s.history.push([s.scores[0],s.scores[1],s.server]);s.scores[s.team]++;s.server=s.team;}}});
