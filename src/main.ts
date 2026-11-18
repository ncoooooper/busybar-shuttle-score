import {rect, type Frame} from "@shared/surface";
import {desk} from "@shared/desk";

function serviceCourt(s: S, done: boolean): Frame {
  if (done) return [];
  const line = "#55778FFF";
  const art: Frame = [rect("top",51,3,20,1,line),rect("bottom",51,13,20,1,line),
    rect("left",51,4,1,9,line),rect("right",70,4,1,9,line),rect("net",60,4,2,9,line),
    rect("center",52,8,18,1,line)];
  const rightCourt = s.scores[s.server]%2===0;
  const upper = s.server===0?!rightCourt:rightCourt;
  art.push(rect("serve",s.server===0?54:65,upper?5:10,3,2,"#FFF0A8FF"));
  return art;
}


type S={scores:number[];team:number;server:number;history:number[][]};const teams=["Home","Away"];
function won(a:number,b:number){return a===30||a>=21&&a-b>=2;}
desk<S>({name:"Shuttle Score",accent:"#6DA9E9",motion:{enabled:false},initial:()=>({scores:[0,0],team:0,server:0,history:[]}),
 render:s=>{const [a,b]=s.scores,done=won(a,b)||won(b,a);return {marks:serviceCourt(s,done),title:done?"Game over":"For "+teams[s.team],value:a+" - "+b,
 lines:[done?teams[a>b?0:1]+" wins":"Next point: "+teams[s.team],"Serve: "+teams[s.server],
 "Court: "+(s.scores[s.server]%2?"left":"right"),"Wheel: side / click: rally","Start: undo last point","Hold Start: new game"]};},
 action:(s,k)=>{if(k==="up"||k==="down")s.team=1-s.team;if(k==="hold-start"){s.scores=[0,0];s.server=0;s.history=[];}
 if(k==="start"&&s.history.length){const last=s.history.pop()!;s.scores=[last[0],last[1]];s.server=last[2];}
 if(k==="ok"&&!won(s.scores[0],s.scores[1])&&!won(s.scores[1],s.scores[0])){s.history.push([s.scores[0],s.scores[1],s.server]);s.scores[s.team]++;s.server=s.team;}}});
