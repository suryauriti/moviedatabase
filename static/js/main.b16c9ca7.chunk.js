(this["webpackJsonpapp-name"]=this["webpackJsonpapp-name"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(2),c=a.n(r),i=a(19),s=a.n(i),o=(a(34),a(4)),l=a(6),d=a(15),u=a(11),j=a(14),p=a(12),h=a(13),b=(a(35),a(18)),m=a.n(b),v=(a(56),a(1)),g=function(e){var t=e.movie,a=t.title,r=t.posterPath,c=t.voteAverage,i=t.id,s="https://image.tmdb.org/t/p/original/".concat(r);return Object(v.jsxs)("li",{className:"movie-item",children:[Object(v.jsx)("img",{src:s,alt:"moviePoster",className:"image"}),Object(v.jsx)("p",{className:"text",children:a}),Object(v.jsx)("p",{className:"text",children:c}),Object(v.jsx)(n.b,{to:"/movie-details/".concat(i),children:Object(v.jsx)("button",{type:"button",className:"viewbutton",children:"View Details"})})]})},O=(a(61),a(25)),x=a(29),f=a(24),k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={movieName:"",expand:!1},e.onChangeMovieName=function(t){e.setState({movieName:t.target.value})},e.menu=function(){return Object(v.jsx)(x.a,{trigger:Object(v.jsx)(f.a,{}),modal:!0,position:"bottom center",children:function(e){return Object(v.jsxs)("div",{className:"popup-container",children:[Object(v.jsx)("button",{type:"button",className:"close",onClick:e,children:Object(v.jsx)(f.b,{})}),Object(v.jsxs)("ul",{className:"min-devices",children:[Object(v.jsx)(n.b,{to:"/",className:"link-component",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"Popular"})})}),Object(v.jsx)(n.b,{to:"/top-rated",className:"link-component",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"Top Rated"})})}),Object(v.jsx)(n.b,{to:"/upcoming",className:"link-component",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"Upcoming"})})})]})]})}})},e.onClickButton=function(){var t=e.state.expand;e.setState({expand:!t})},e.renderSearchBar=function(){var t=e.state.movieName;return Object(v.jsxs)("div",{className:"search-container",children:[Object(v.jsx)("input",{type:"search",className:"input",value:t,placeholder:"Search",onChange:e.onChangeMovieName}),Object(v.jsx)(n.b,{to:"/searchMovies/".concat(t),children:Object(v.jsx)("button",{type:"button",className:"search-button",onClick:e.onClickButton,children:Object(v.jsx)(O.a,{size:25})})})]})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.movieName,e.expand);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"nav-container",children:[Object(v.jsx)("h1",{className:"title",children:"movieDB"}),Object(v.jsx)("div",{className:"large-screen-search",children:this.renderSearchBar()}),Object(v.jsx)("button",{type:"button",className:"search-button small-screen-button",onClick:this.onClickButton,children:Object(v.jsx)(O.a,{size:25})}),Object(v.jsxs)("div",{className:"small-devices",children:[this.menu(),Object(v.jsx)("div",{id:"popup-root",className:"popup_root"})]}),Object(v.jsxs)("ul",{className:"routes-container",children:[Object(v.jsx)(n.b,{to:"/",className:"link-component",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"Popular"})})}),Object(v.jsx)(n.b,{to:"/top-rated",className:"link-component",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"Top Rated"})})}),Object(v.jsx)(n.b,{to:"/upcoming",className:"link-component",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"Upcoming"})})})]})]}),Object(v.jsx)("div",{className:"mobile-search-bar",children:t?this.renderSearchBar():""})]})}}]),a}(r.Component),N=k,D=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movieDetails:"",isLoading:!1},e.convertSnakeCaseToPascalCase=function(e){return{adult:e.adult,backdropPath:e.backdrop_path,genreIds:e.genre_ids,id:e.id,originalLanguage:e.original_language,originalTitle:e.original_title,overView:e.overview,popularity:e.popularity,posterPath:e.poster_path,releaseDate:e.release_date,title:e.title,video:e.video,voteAverage:e.vote_average,voteCount:e.vote_count}},e.getData=Object(d.a)(Object(l.a)().mark((function t(){var a,n,r,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),"https://api.themoviedb.org/3/movie/popular?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1",t.next=4,fetch("https://api.themoviedb.org/3/movie/popular?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1");case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,console.log("response data=",n),!0===a.ok&&(r=n.results,c=r.map((function(t){return e.convertSnakeCaseToPascalCase(t)})),e.setState({movieDetails:c,isLoading:!1}));case 10:case"end":return t.stop()}}),t)}))),e.renderPopularDetails=function(e){return console.log("render popular detials fucntion////////*******",e),""!==e?e.map((function(e){return Object(v.jsx)(g,{movie:e},e.id)})):""},e.renderLoading=function(){return Object(v.jsx)("div",{className:"loader-container",children:Object(v.jsx)(m.a,{type:"ThreeDots",color:"blue"})})},e.renderResult=function(){var t=e.state,a=t.isLoading,n=t.movieDetails;return!1===a?e.renderPopularDetails(n):e.renderLoading()},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.movieDetails;return console.log("movie details*****",e),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{}),Object(v.jsx)("div",{className:"popular-container",children:Object(v.jsxs)("div",{className:"width-container",children:[Object(v.jsx)("h1",{className:"popular-heading",children:"Popular"}),Object(v.jsx)("ul",{className:"movies-container",children:this.renderResult()})]})})]})}}]),a}(r.Component),_=D,y=(a(62),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movieDetails:"",isLoading:!1},e.convertSnakeCaseToPascalCase=function(e){return{adult:e.adult,backdropPath:e.backdrop_path,genreIds:e.genre_ids,id:e.id,originalLanguage:e.original_language,originalTitle:e.original_title,overView:e.overview,popularity:e.popularity,posterPath:e.poster_path,releaseDate:e.release_date,title:e.title,video:e.video,voteAverage:e.vote_average,voteCount:e.vote_count}},e.getData=Object(d.a)(Object(l.a)().mark((function t(){var a,n,r,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),"https://api.themoviedb.org/3/movie/top_rated?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1",t.next=4,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1");case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,console.log("response data=",n),!0===a.ok&&(r=n.results,c=r.map((function(t){return e.convertSnakeCaseToPascalCase(t)})),e.setState({movieDetails:c,isLoading:!1}));case 10:case"end":return t.stop()}}),t)}))),e.renderPopularDetails=function(e){return console.log("render popular detials fucntion////////*******",e),""!==e?e.map((function(e){return Object(v.jsx)(g,{movie:e},e.id)})):""},e.renderLoading=function(){return Object(v.jsx)("div",{className:"loader-container",children:Object(v.jsx)(m.a,{type:"ThreeDots",color:"blue"})})},e.renderResult=function(){var t=e.state,a=t.isLoading,n=t.movieDetails;return!1===a?e.renderPopularDetails(n):e.renderLoading()},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.movieDetails;return console.log("movie details*****",e),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{}),Object(v.jsx)("div",{className:"popular-container",children:Object(v.jsxs)("div",{className:"width-container",children:[Object(v.jsx)("h1",{className:"popular-heading",children:"Top Rated"}),Object(v.jsx)("ul",{className:"movies-container",children:this.renderResult()})]})})]})}}]),a}(r.Component)),C=y,w=(a(63),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movieDetails:"",isLoading:!1},e.convertSnakeCaseToPascalCase=function(e){return{adult:e.adult,backdropPath:e.backdrop_path,genreIds:e.genre_ids,id:e.id,originalLanguage:e.original_language,originalTitle:e.original_title,overView:e.overview,popularity:e.popularity,posterPath:e.poster_path,releaseDate:e.release_date,title:e.title,video:e.video,voteAverage:e.vote_average,voteCount:e.vote_count}},e.getData=Object(d.a)(Object(l.a)().mark((function t(){var a,n,r,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),"https://api.themoviedb.org/3/movie/upcoming?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1",t.next=4,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1");case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,console.log("response data=",n),!0===a.ok&&(r=n.results,c=r.map((function(t){return e.convertSnakeCaseToPascalCase(t)})),e.setState({movieDetails:c,isLoading:!1}));case 10:case"end":return t.stop()}}),t)}))),e.renderPopularDetails=function(e){return""!==e?e.map((function(e){return Object(v.jsx)(g,{movie:e},e.id)})):""},e.renderLoading=function(){return Object(v.jsx)("div",{className:"loader-container",children:Object(v.jsx)(m.a,{type:"ThreeDots",color:"blue"})})},e.renderResult=function(){var t=e.state,a=t.isLoading,n=t.movieDetails;return!1===a?e.renderPopularDetails(n):e.renderLoading()},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.movieDetails;return console.log("movie details*****",e),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{}),Object(v.jsx)("div",{className:"popular-container",children:Object(v.jsxs)("div",{className:"width-container",children:[Object(v.jsx)("h1",{className:"popular-heading",children:"Upcoming"}),Object(v.jsx)("ul",{className:"movies-container",children:this.renderResult()})]})})]})}}]),a}(r.Component)),S=w,P=(a(64),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movieDetails:[],castDetails:[]},e.convertSnakeCaseToPascalCase=function(e){return{adult:e.adult,castId:e.cast_id,character:e.character,creditId:e.credit_id,gender:e.gender,id:e.id,knownForDepartment:e.known_for_department,name:e.name,order:e.order,originalName:e.original_name,popularity:e.popularity,profilePath:e.profile_path}},e.getData=Object(d.a)(Object(l.a)().mark((function t(){var a,n,r,c,i,s,o;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,n=a.params,r=n.id,c="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US"),t.next=6,fetch(c);case 6:return i=t.sent,t.next=9,i.json();case 9:s=t.sent,!0===i.ok&&(o={name:s.original_title,imageUrl:"https://image.tmdb.org/t/p/original/".concat(s.poster_path),rating:s.vote_average,duration:s.runtime,genre:s.genres,releaseDate:s.release_date,overView:s.overview},console.log("response data = ",o),e.setState({movieDetails:o}));case 11:case"end":return t.stop()}}),t)}))),e.getCastData=Object(d.a)(Object(l.a)().mark((function t(){var a,n,r,c,i,s,o,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,n=a.params,r=n.id,c="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US"),t.next=6,fetch(c);case 6:return i=t.sent,t.next=9,i.json();case 9:s=t.sent,!0===i.ok&&(o=s.cast,console.log("old cast",o),d=o.map((function(t){return e.convertSnakeCaseToPascalCase(t)})),console.log("new data",d),e.setState({castDetails:d}));case 11:case"end":return t.stop()}}),t)}))),e.renderGenre=function(e){if(void 0!==e){if(2===e.length){var t=e[0].name,a=e[1].name;return Object(v.jsxs)("p",{children:[t,"/",a]})}var n=e[0].name;return Object(v.jsx)("p",{children:n})}return""},e.renderMovieDetails=function(){var t=e.state.movieDetails,a=t.name,n=t.imageUrl,r=t.rating,c=t.duration,i=t.releaseDate,s=t.overView,o=t.genre;return Object(v.jsx)("div",{className:"movie-details-container",children:Object(v.jsxs)("div",{className:"left-container",children:[Object(v.jsx)("img",{src:n,className:"detailed-image"}),Object(v.jsxs)("div",{className:"movie-details-text-container",children:[Object(v.jsx)("h1",{children:a}),Object(v.jsxs)("div",{className:"duration-genre-rating-container",children:[Object(v.jsx)("p",{children:i}),e.renderGenre(o),Object(v.jsxs)("p",{children:[c," m"]}),Object(v.jsx)("p",{children:r})]}),Object(v.jsx)("h3",{children:"Overview"}),Object(v.jsx)("p",{children:s})]})]})})},e.renderCastDetails=function(e){var t=e.originalName,a=e.character,n=e.profilePath,r="https://image.tmdb.org/t/p/original/".concat(n);return Object(v.jsxs)("li",{className:"each-cast",children:[Object(v.jsx)("img",{src:r,className:"cast-image"}),Object(v.jsx)("h4",{children:t}),Object(v.jsx)("p",{children:a})]})},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData(),this.getCastData()}},{key:"render",value:function(){var e=this,t=this.state.castDetails;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{}),Object(v.jsxs)("div",{className:"container",children:[this.renderMovieDetails(),void 0!==t?Object(v.jsxs)("div",{className:"cast-container",children:[Object(v.jsx)("h2",{className:"cast-heading",children:"Cast"}),Object(v.jsx)("ul",{className:"unordered-container",children:t.map((function(t){return e.renderCastDetails(t)}))})]}):""]})]})}}]),a}(r.Component)),L=P,T=(a(65),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchResults:""},e.convertSnakeCaseToPascalCase=function(e){return{adult:e.adult,backdropPath:e.backdrop_path,genreIds:e.genre_ids,id:e.id,originalLanguage:e.original_language,originalTitle:e.original_title,overView:e.overview,popularity:e.popularity,posterPath:e.poster_path,releaseDate:e.release_date,title:e.title,video:e.video,voteAverage:e.vote_average,voteCount:e.vote_count}},e.getData=Object(d.a)(Object(l.a)().mark((function t(){var a,n,r,c,i,s,o,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,n=a.params,r=n.movieName,c="https://api.themoviedb.org/3/search/movie?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&query=".concat(r,"&page=1"),t.next=6,fetch(c);case 6:return i=t.sent,t.next=9,i.json();case 9:s=t.sent,!0===i.ok&&(o=s.results,d=o.map((function(t){return e.convertSnakeCaseToPascalCase(t)})),e.setState({searchResults:d}));case 11:case"end":return t.stop()}}),t)}))),e.renderSearchResults=function(){var t=e.state.searchResults;return console.log("search results=",t),""!==t?Object(v.jsx)("ul",{className:"search-container",children:t.map((function(e){return Object(v.jsx)(g,{movie:e},e.id)}))}):""},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"search-home-container",children:[Object(v.jsx)(N,{}),this.renderSearchResults()]})})}}]),a}(r.Component)),R=T,U=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:_}),Object(v.jsx)(o.a,{exact:!0,path:"/top-rated",component:C}),Object(v.jsx)(o.a,{exact:!0,path:"/upcoming",component:S}),Object(v.jsx)(o.a,{exact:!0,path:"/movie-details/:id",component:L}),Object(v.jsx)(o.a,{exact:!0,path:"/searchMovies/:movieName",component:R})]})})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(n.a,{children:Object(v.jsx)(U,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b16c9ca7.chunk.js.map