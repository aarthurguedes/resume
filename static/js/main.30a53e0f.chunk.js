(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"e":"Arthur Guedes","f":"Software Developer","g":{"labels":["linkedin.com/in/arthurslguedes","github.com/aarthurguedes","arthurslguedes@gmail.com"],"links":["https://www.linkedin.com/in/arthurslguedes/","https://github.com/aarthurguedes","mailto:arthurslguedes@gmail.com"]},"b":{"course":"Computer Science","institution":"Federal University of Campina Grande","institutionPage":"https://portal.ufcg.edu.br/","duration":"2018 - Present"},"d":[{"language":"Portuguese","level":"Native"},{"language":"English","level":"Advanced"}],"a":"Computer Science student, currently studying the 5th period of the course and working with web development. Until the moment of graduation, i had the opportunity to work with software development on both the frontend and backend side. In addition, i\'m interested in the field of data science. In my free time, i like to learn/discover new things and i\'m always ready for new challenges.","c":[{"company":"Software Practices Laboratory (SPLAB) - CodeSQ","companyPage":"https://splab.computacao.ufcg.edu.br/","duration":"2020/November - Present","activities":["Frontend Development","Application containerization using docker and docker-compose"],"technologies":"React (Redux), Jest, Docker"},{"company":"Incodde","companyPage":"https://www.incodde.com/","duration":"2020/April - 2020/October","activities":["Full Stack Development"],"technologies":"Vue.js, Node.js, Ember.js, Jest, TailwindCSS"},{"company":"Gama Academy (In partnership with VTEX)","companyPage":"https://gama.academy/","duration":"2020/March - 2020/September","activities":["Fullstack Training","Study of agile methodologies such as Scrum and Kanban","Study of best development practices: BEM, Design System, Storybook, Micro Frontends, MVC, MVVM, Design Patterns"],"technologies":"React, Bootstrap, Node.js, Typescript, GraphQL, Jest, Cypress"}],"h":"HTML, CSS, JavaScript, React (Redux), Vue.js, Node.js, Typescript, Jest, Cypress, Java (Spring Boot), Python, PHP (Laravel/Lumen), GraphQL, Docker"}')},,,,,,function(e,n,t){e.exports=t(23)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),l=t(6),r=t.n(l),i=(t(13),t(14),t(15),t(2)),o=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,i.e),c.a.createElement("h2",null,i.f))},s=(t(16),t(17),function(e){var n=e.icon,t=e.iconSize,a=e.title,l=e.className,r=e.children,i=n,o=a.split(" ")[0],s=l?"".concat(o,"__content ").concat(l):"".concat(o,"__content");return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"section__title"},c.a.createElement(i,{size:t||28}),c.a.createElement("span",null,a)),c.a.createElement("div",{className:s},r))}),u=(t(18),function(e){var n=e.href,t=e.className,a=e.children;return c.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:t},a)}),m=function(e){var n=e.icon,t=e.iconSize,a=e.className,l=e.link,r=e.label;return c.a.createElement(u,{className:"contact-info link ".concat(a),href:l},c.a.createElement(n,{size:t||20}),c.a.createElement("span",null,r))},p=function(e){var n=e.labels,t=e.links,a=e.icons;return n.map((function(e,l){return c.a.createElement(m,{key:e,label:e,link:t[l],icon:a[l],className:(r=l,i=n.length,r!==i-1?"contact-info--mb":"")});var r,i}))},d=t(7),g=t(4),f=t(3),h={personalInfo:{section:d.a,contact:[g.c,g.b,f.a]},MdSchool:f.d,MdLanguage:f.b,MdPerson:f.c,MdWork:f.e},E=h.personalInfo,b=E.section,v=E.contact,y=i.g.labels,k=i.g.links,N=function(){return c.a.createElement(s,{title:"personal info",icon:b},c.a.createElement(p,{labels:y,links:k,icons:v}))},S=(t(19),h.MdSchool),w=i.b.course,x=i.b.institution,M=i.b.institutionPage,P=i.b.duration,_=function(){return c.a.createElement(s,{className:"flex-column",title:"education",icon:S},c.a.createElement("span",{className:"span--big"},w),c.a.createElement(u,{href:M,className:"link"},x),c.a.createElement("span",{className:"span--light"},P))},C=function(e){return e.languages.map((function(e){return c.a.createElement(a.Fragment,{key:e.language},c.a.createElement("span",{className:"span--big"},e.language,": "),c.a.createElement("span",null,e.level),c.a.createElement("br",null))}))},J=h.MdLanguage,L=function(){return c.a.createElement(s,{title:"languages",icon:J},c.a.createElement(C,{languages:i.d}))},A=function(){return c.a.createElement("aside",{className:"aside flex-column"},c.a.createElement(N,null),c.a.createElement(_,null),c.a.createElement(L,null))},D=(t(20),t(21),h.MdPerson),F=function(){return c.a.createElement(s,{title:"about",icon:D},c.a.createElement("p",null,i.a))},I=(t(22),function(e){var n=e.experiences;return n.map((function(e,t){return c.a.createElement("div",{className:(a=t,l=n.length,a===l-1?"experience flex-column":"experience flex-column".concat(" experience--mb")),key:t},c.a.createElement(u,{href:e.companyPage,className:"experience__title"},e.company),c.a.createElement("span",{className:"experience__duration span--light"},e.duration),c.a.createElement("span",{className:"span--semi-bold"},"Main Activities:"),c.a.createElement("ul",{className:"experience__activities"},e.activities.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("p",null,e))}))),c.a.createElement("p",null,c.a.createElement("span",{className:"span--semi-bold"},"Technologies: "),c.a.createElement("span",null,e.technologies)));var a,l}))}),T=h.MdWork,j=function(){return c.a.createElement(s,{className:"flex-column",title:"experience",icon:T},c.a.createElement(I,{experiences:i.c}))},V=function(){return c.a.createElement(s,{title:"skills",icon:g.a},c.a.createElement("p",null,i.h))},z=function(){return c.a.createElement("main",{className:"main flex-column"},c.a.createElement(F,null),c.a.createElement(j,null),c.a.createElement(V,null))},B=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o,null),c.a.createElement(A,null),c.a.createElement(z,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.30a53e0f.chunk.js.map