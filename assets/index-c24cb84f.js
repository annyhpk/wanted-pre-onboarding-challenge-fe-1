import{_ as W,d as E,n as G,i as D,e as q,f as ee,g as te,h as z,k as N,s as re,l as se,m as C,o as H,p as ne,R as m,q as ie,v as I,w as ue,c as R,r as b,j as f,b as T}from"./index-838ca03a.js";import{u as oe,i as x,I as ae}from"./api-809d8e36.js";var ce=function(u){W(i,u);function i(s,t){var e;return e=u.call(this)||this,e.client=s,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var r=i.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),V(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return M(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return M(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var o=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var c=this.hasListeners();c&&K(this.currentQuery,n,this.options,o)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==n||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var a=this.computeRefetchInterval();c&&(this.currentQuery!==n||this.options.enabled!==o.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),o=this.client.getQueryCache().build(this.client,e);return this.createResult(o,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t,e){var o=this,n={},c=function(l){o.trackedProps.includes(l)||o.trackedProps.push(l)};return Object.keys(t).forEach(function(a){Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:function(){return c(a),t[a]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),n},r.getNextResult=function(t){var e=this;return new Promise(function(o,n){var c=e.subscribe(function(a){a.isFetching||(c(),a.isError&&(t!=null&&t.throwOnError)?n(a.error):o(a))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(E({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},r.fetchOptimistic=function(t){var e=this,o=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,o);return n.fetch().then(function(){return e.createResult(n,o)})},r.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(G)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(D||this.currentResult.isStale||!q(this.options.staleTime))){var e=ee(this.currentResult.dataUpdatedAt,this.options.staleTime),o=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},o)}},r.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},r.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(D||this.options.enabled===!1||!q(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||te.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(t,e){var o=this.currentQuery,n=this.options,c=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,h=t!==o,p=h?t.state:this.currentQueryInitialState,O=h?this.currentResult:this.previousQueryResult,d=t.state,S=d.dataUpdatedAt,L=d.error,_=d.errorUpdatedAt,U=d.isFetching,v=d.status,j=!1,$=!1,y;if(e.optimisticResults){var B=this.hasListeners(),X=!B&&V(t,e),Y=B&&K(t,o,e,n);(X||Y)&&(U=!0,S||(v="loading"))}if(e.keepPreviousData&&!d.dataUpdateCount&&(O!=null&&O.isSuccess)&&v!=="error")y=O.data,S=O.dataUpdatedAt,v=O.status,j=!0;else if(e.select&&typeof d.data<"u")if(c&&d.data===(a==null?void 0:a.data)&&e.select===this.selectFn)y=this.selectResult;else try{this.selectFn=e.select,y=e.select(d.data),e.structuralSharing!==!1&&(y=z(c==null?void 0:c.data,y)),this.selectResult=y,this.selectError=null}catch(Q){N().error(Q),this.selectError=Q}else y=d.data;if(typeof e.placeholderData<"u"&&typeof y>"u"&&(v==="loading"||v==="idle")){var g;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(l==null?void 0:l.placeholderData))g=c.data;else if(g=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof g<"u")try{g=e.select(g),e.structuralSharing!==!1&&(g=z(c==null?void 0:c.data,g)),this.selectError=null}catch(Q){N().error(Q),this.selectError=Q}typeof g<"u"&&(v="success",y=g,$=!0)}this.selectError&&(L=this.selectError,y=this.selectResult,_=Date.now(),v="error");var Z={status:v,isLoading:v==="loading",isSuccess:v==="success",isError:v==="error",isIdle:v==="idle",data:y,dataUpdatedAt:S,error:L,errorUpdatedAt:_,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>p.dataUpdateCount||d.errorUpdateCount>p.errorUpdateCount,isFetching:U,isRefetching:U&&v!=="loading",isLoadingError:v==="error"&&d.dataUpdatedAt===0,isPlaceholderData:$,isPreviousData:j,isRefetchError:v==="error"&&d.dataUpdatedAt!==0,isStale:k(t,e),refetch:this.refetch,remove:this.remove};return Z},r.shouldNotifyListeners=function(t,e){if(!e)return!0;var o=this.options,n=o.notifyOnChangeProps,c=o.notifyOnChangePropsExclusions;if(!n&&!c||n==="tracked"&&!this.trackedProps.length)return!0;var a=n==="tracked"?this.trackedProps:n;return Object.keys(t).some(function(l){var h=l,p=t[h]!==e[h],O=a==null?void 0:a.some(function(S){return S===l}),d=c==null?void 0:c.some(function(S){return S===l});return p&&!d&&(!a||O)})},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!re(this.currentResult,e)){var o={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(o.listeners=!0),this.notify(E({},o,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!se(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;C.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(o){o(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},i}(H);function le(u,i){return i.enabled!==!1&&!u.state.dataUpdatedAt&&!(u.state.status==="error"&&i.retryOnMount===!1)}function V(u,i){return le(u,i)||u.state.dataUpdatedAt>0&&M(u,i,i.refetchOnMount)}function M(u,i,r){if(i.enabled!==!1){var s=typeof r=="function"?r(u):r;return s==="always"||s!==!1&&k(u,i)}return!1}function K(u,i,r,s){return r.enabled!==!1&&(u!==i||s.enabled===!1)&&(!r.suspense||u.state.status!=="error")&&k(u,r)}function k(u,i){return u.isStaleByTime(i.staleTime)}var de=function(u){W(i,u);function i(s,t){var e;return e=u.call(this)||this,e.client=s,e.setOptions(t),e.bindMethods(),e.updateResult(),e}var r=i.prototype;return r.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},r.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},r.onUnsubscribe=function(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}},r.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};t.type==="success"?e.onSuccess=!0:t.type==="error"&&(e.onError=!0),this.notify(e)},r.getCurrentResult=function(){return this.currentResult},r.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},r.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,E({},this.options,{variables:typeof t<"u"?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},r.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:ne(),e=E({},t,{isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=e},r.notify=function(t){var e=this;C.batch(function(){e.mutateOptions&&(t.onSuccess?(e.mutateOptions.onSuccess==null||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),e.mutateOptions.onSettled==null||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(e.mutateOptions.onError==null||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),e.mutateOptions.onSettled==null||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach(function(o){o(e.currentResult)})})},i}(H);function he(){var u=!1;return{clearReset:function(){u=!1},reset:function(){u=!0},isReset:function(){return u}}}var fe=m.createContext(he()),pe=function(){return m.useContext(fe)};function J(u,i,r){return typeof i=="function"?i.apply(void 0,r):typeof i=="boolean"?i:!!u}function P(u,i,r){var s=m.useRef(!1),t=m.useState(0),e=t[1],o=ie(u,i,r),n=I(),c=m.useRef();c.current?c.current.setOptions(o):c.current=new de(n,o);var a=c.current.getCurrentResult();m.useEffect(function(){s.current=!0;var h=c.current.subscribe(C.batchCalls(function(){s.current&&e(function(p){return p+1})}));return function(){s.current=!1,h()}},[]);var l=m.useCallback(function(h,p){c.current.mutate(h,p).catch(G)},[]);if(a.error&&J(void 0,c.current.options.useErrorBoundary,[a.error]))throw a.error;return E({},a,{mutate:l,mutateAsync:a.mutate})}function ve(u,i){var r=m.useRef(!1),s=m.useState(0),t=s[1],e=I(),o=pe(),n=e.defaultQueryObserverOptions(u);n.optimisticResults=!0,n.onError&&(n.onError=C.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=C.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=C.batchCalls(n.onSettled)),n.suspense&&(typeof n.staleTime!="number"&&(n.staleTime=1e3),n.cacheTime===0&&(n.cacheTime=1)),(n.suspense||n.useErrorBoundary)&&(o.isReset()||(n.retryOnMount=!1));var c=m.useState(function(){return new i(e,n)}),a=c[0],l=a.getOptimisticResult(n);if(m.useEffect(function(){r.current=!0,o.clearReset();var h=a.subscribe(C.batchCalls(function(){r.current&&t(function(p){return p+1})}));return a.updateResult(),function(){r.current=!1,h()}},[o,a]),m.useEffect(function(){a.setOptions(n,{listeners:!1})},[n,a]),n.suspense&&l.isLoading)throw a.fetchOptimistic(n).then(function(h){var p=h.data;n.onSuccess==null||n.onSuccess(p),n.onSettled==null||n.onSettled(p,null)}).catch(function(h){o.clearReset(),n.onError==null||n.onError(h),n.onSettled==null||n.onSettled(void 0,h)});if(l.isError&&!o.isReset()&&!l.isFetching&&J(n.suspense,n.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error;return n.notifyOnChangeProps==="tracked"&&(l=a.trackResult(l,n)),l}function me(u,i,r){var s=ue(u,i,r);return ve(s,ce)}const ye=R("textarea",{target:"e8tae9m0"})({name:"51gjk0",styles:"width:19rem;border:2px solid;border-radius:0.75rem;padding:0.2rem 0.75rem;height:3.6rem;font-size:14px"});function Re({name:u,placeholder:i},r){const[s,t]=oe("");return f(ye,{ref:r,name:u,value:s,onChange:t,placeholder:i,autoComplete:"off"})}const be=b.forwardRef(Re);class w{static getTodos(){return x.get("/todos").then(i=>{var r;return(r=i.data)==null?void 0:r.data}).catch(i=>{throw new Error(`Getting todos failed: ${i}`)})}static createTodo(i){return x.post("/todos",i).then(r=>{var s;return(s=r.data)==null?void 0:s.data}).catch(r=>{throw new Error(`Creating todos failed: ${r}`)})}static updateTodo({id:i,todoPayload:r}){return x.put(`/todos/${i}`,r).then(s=>{var t;return(t=s.data)==null?void 0:t.data}).catch(s=>{throw new Error(`Updating todos failed: ${s}`)})}static deleteTodo(i){return x.delete(`/todos/${i}`).then(r=>{var s;return(s=r.data)==null?void 0:s.data}).catch(r=>{throw new Error(`Deleting todos failed: ${r}`)})}}const ge=()=>{const u=I();return P(w.deleteTodo,{onSettled:()=>{u.invalidateQueries(["todos"])}})},Oe=()=>{const u=I();return P(w.updateTodo,{onSettled:()=>{u.invalidateQueries(["todos"])}})},Se=R("div",{target:"ep0es836"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),A=R("button",{target:"ep0es835"})({name:"1o23sjc",styles:"border:2px solid gray;border-radius:0.5rem;height:1.6rem"}),Ce=R(A,{target:"ep0es834"})({name:"1ai8bui",styles:":hover{background-color:#86efac;}"}),Te=R(A,{target:"ep0es833"})({name:"xsmy7q",styles:":hover{background-color:#fca5a5;}"}),F=R(A.withComponent("input",{target:"ep0es837"}),{target:"ep0es832"})({name:"ezbc4w",styles:"width:15rem;height:1.2rem"}),Qe=R(F.withComponent("p",{target:"ep0es838"}),{target:"ep0es831"})({name:"1rfwmzu",styles:"font-weight:bold;margin-bottom:0.5rem;border:0"}),Ee=R("pre",{target:"ep0es830"})({name:"n5o1pk",styles:"border:0;overflow:hidden;text-overflow:ellipsis;width:15rem;white-space:pre-wrap;word-wrap:break-word;max-height:3.6rem"});function Ie({id:u,title:i,content:r}){const[s,t]=b.useState(!1),e=b.useRef(null),o=b.useRef(null),n=Oe(),c=ge(),a=b.useCallback(()=>{if(t(p=>!p),!s||!e.current||!o.current)return;const h={title:e.current.value,content:o.current.value};n.mutate({id:u,todoPayload:h})},[s]),l=b.useCallback(()=>{c.mutate(u)},[]);return T(Se,{children:[s?T("form",{children:[f(F,{ref:e,name:"title",type:"text",defaultValue:i}),f(F,{ref:o,name:"content",type:"text",defaultValue:r})]}):T("div",{children:[f(Qe,{children:i}),f(Ee,{children:r})]}),T("div",{children:[f(Ce,{type:"button",onClick:a,children:s?"✅":"⚙️"}),f(Te,{type:"button",onClick:l,children:"🗑️"})]})]})}const xe=b.memo(Ie),we=()=>{const u=I();return P(w.createTodo,{onSettled:()=>{u.invalidateQueries(["todos"])}})},Ue=()=>me(["todos"],w.getTodos,{suspense:!0}),Me=R("div",{target:"e1m7j2zw2"})({name:"130xtx7",styles:"border:2px solid;border-radius:0.75rem;padding:1.25rem;width:18rem"}),Fe=R("div",{target:"e1m7j2zw1"})({name:"154rxsx",styles:"display:grid;gap:1.25rem"}),ke=R("form",{target:"e1m7j2zw0"})({name:"p2oy12",styles:"display:flex;flex-direction:column;gap:0.25rem"});function Le(){const u=b.useRef(null),i=b.useRef(null),{isLoading:r,data:s}=Ue(),t=we(),e=b.useCallback(o=>{o.preventDefault(),!(!u.current||!i.current)&&(t.mutate({title:u.current.value,content:i.current.value}),t.isSuccess&&(u.current.value="",i.current.value=""))},[]);return f("main",{children:T(Fe,{children:[f("h3",{children:"할 일 쓰기"}),T(ke,{onSubmit:e,children:[f(ae,{ref:u,name:"title",type:"text",placeholder:"제목"}),f(be,{ref:i,name:"content",placeholder:"내용"}),f("button",{type:"submit",children:"글 쓰기"})]}),f("h3",{children:"할 일 목록"}),f(Me,{children:r?f("p",{children:"로딩중..."}):s.map(o=>T("div",{children:[f(xe,{...o}),f("hr",{})]},o.id)).reverse()})]})})}export{Le as default};
