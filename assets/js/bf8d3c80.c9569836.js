(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[51374],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),l=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),h=l(a),u=o,c=h["".concat(r,".").concat(u)]||h[u]||d[u]||s;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=h;var m={};for(var r in t)hasOwnProperty.call(t,r)&&(m[r]=t[r]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41161:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return r},default:function(){return p}});var n=a(22122),o=a(19756),s=(a(67294),a(3905)),i={title:"Score table"},m={unversionedId:"Score_table",id:"version-v4/Score_table",isDocsHomePage:!1,title:"Score table",description:'"Score table" task description',source:"@site/versioned_docs/version-v4/Score_table.md",sourceDirName:".",slug:"/Score_table",permalink:"/Score_table",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Score_table.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Score table"},sidebar:"version-v4/learn",previous:{title:"Examples",permalink:"/Examples"},next:{title:"Materials management",permalink:"/Materials_management"}},r=[{value:"&quot;Score table&quot; task description",id:"score-table-task-description",children:[]},{value:"Defining the domain logic",id:"defining-the-domain-logic",children:[{value:"Module declaration",id:"module-declaration",children:[]},{value:"Team definition",id:"team-definition",children:[]},{value:"Game definition",id:"game-definition",children:[]},{value:"Determining the winner of the game",id:"determining-the-winner-of-the-game",children:[]},{value:"Determining game result",id:"determining-game-result",children:[]},{value:"Creating a score table",id:"creating-a-score-table",children:[]}]},{value:"Defining view logic",id:"defining-view-logic",children:[]},{value:"The complete source code (on GitHub)",id:"the-complete-source-code-on-github",children:[]}],l={toc:r};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"score-table-task-description"},'"Score table" task description'),(0,s.kt)("p",null,"This information system, created using the ",(0,s.kt)("strong",{parentName:"p"},"lsFusion Platform"),", should contain the functionality for keeping score at a hockey tournament."),(0,s.kt)("p",null,"A tournament is understood to mean a subset of games between teams (with two teams participating in each game), which result in points being awarded to the teams."),(0,s.kt)("p",null,"In each game, the result of each game can be a regular-time win of one of the teams (the winning team receives 3 points), an overtime win (the winning team receives 2 points, while the losing team receives 1), or a penalty shootout win (the winning team receives 2 points, while the losing team receives 1)."),(0,s.kt)("p",null,"A team's score table ranking is determined by the total number of points. In case of a tie, additional parameters are considered: number of regular-time victories, number of overtime victories, number of penalty shootout victories, the difference between scores and misses, number of scores. Additional parameters for determining the final ranking are applied consecutively in a specified order until a status is achieved in which the results of the teams are uniquely ranked."),(0,s.kt)("h2",{id:"defining-the-domain-logic"},"Defining the domain logic"),(0,s.kt)("h3",{id:"module-declaration"},"Module declaration"),(0,s.kt)("p",null,"We declare a ",(0,s.kt)("a",{parentName:"p",href:"/Modules"},"module")," within which the required functionality will be implemented. We assign an arbitrary name to the module (for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"HockeyStats"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE HockeyStats;\n")),(0,s.kt)("p",null,"We define the use of functionality from other modules in the ",(0,s.kt)("inlineCode",{parentName:"p"},"HockeyStats")," module. In particular, we need the system module ",(0,s.kt)("inlineCode",{parentName:"p"},"System"),", in which some system elements used in the example are declared."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE System, Utils;\n")),(0,s.kt)("h3",{id:"team-definition"},"Team definition"),(0,s.kt)("p",null,"We introduce the concept of a team, for which we create a separate ",(0,s.kt)("a",{parentName:"p",href:"/Classes"},"class")," using the corresponding ",(0,s.kt)("a",{parentName:"p",href:"/CLASS_statement"},"statement ",(0,s.kt)("inlineCode",{parentName:"a"},"CLASS")),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Team 'Team';\n")),(0,s.kt)("p",null,"We assign a name to the class created (for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"Team"),"), which will subsequently be used when building ",(0,s.kt)("a",{parentName:"p",href:"/Expression"},"expressions"),", as well as a caption to display on custom forms (for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"'Team'"),")."),(0,s.kt)("p",null,"So that all teams can be easily identified when working with forms created later, we create a name for the team. In other words, we create a ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," ",(0,s.kt)("a",{parentName:"p",href:"/Properties"},"property")," that can be defined for objects of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Team")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"name 'Team name' = DATA STRING[30] (Team) IN base;\n")),(0,s.kt)("p",null,"Thus, the team name is a ",(0,s.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data")," (user-entered) string-type property. Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"IN")," option, the created property is added to the predefined ",(0,s.kt)("inlineCode",{parentName:"p"},"base")," ",(0,s.kt)("a",{parentName:"p",href:"/Groups_of_properties_and_actions"},"property group"),". Object properties belonging to the ",(0,s.kt)("inlineCode",{parentName:"p"},"base")," group will be automatically displayed on the dialog form for selecting an object of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Team")," class."),(0,s.kt)("h3",{id:"game-definition"},"Game definition"),(0,s.kt)("p",null,"We introduce the concept of the game and its attributes: date, participants (host team and guest team), and their names."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game 'Game';\n\ndate 'Date' = DATA DATE (Game);\nhostTeam = DATA Team (Game);\nguestTeam = DATA Team (Game);\nhostTeamName 'Hosts' (Game game) = name(hostTeam(game));\nguestTeamName 'Guests' (Game game) = name(guestTeam(game));\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeam")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"guestTeam")," properties are ",(0,s.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data")," object properties of a game, whose values are links to the host team and guest team, respectively (that is, to specific ",(0,s.kt)("inlineCode",{parentName:"p"},"Team"),"-class objects). Properties of the team names of the game hosts and guests (",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeamName")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"guestTeamName"),") are created for subsequent use on forms. If the ",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeam")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"guestTeam")," properties are added to the form, the user will see the internal IDs of objects from the database."),(0,s.kt)("p",null,"We introduce the constraint that the game participants must be two different teams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT hostTeam(Game team) = guestTeam(team) CHECKED BY hostTeam, guestTeam MESSAGE 'Host and guest teams must be different';\n")),(0,s.kt)("p",null,"The operating mechanism of this expression is as follows: when the host team or guest team of a game changes, the system checks the condition of equality of these teams ",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeam(team) == guestTeam(team)"),", and if it is met the system blocks the application of changes to the database, and also gives the user the specified message ",(0,s.kt)("inlineCode",{parentName:"p"},"'Host and guest teams must be different'"),". In other words, the result of the expression specified after the ",(0,s.kt)("inlineCode",{parentName:"p"},"CONSTRAINT")," operator must be ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),". In all other cases the restriction will be considered violated.  In addition, thanks to the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECKED BY")," block, the created constraint will filter teams when selecting a home team or a guest team for a game (that is, it will exclude the team already set as the opponent from the list of teams in the dialog that appears upon selecting a team)."),(0,s.kt)("p",null,"We define the number of goals scored by each team during the game."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"hostGoals 'H goals' = DATA INTEGER (Game);\nguestGoals 'G goals' = DATA INTEGER (Game);\n")),(0,s.kt)("p",null,"The defined properties use the ",(0,s.kt)("inlineCode",{parentName:"p"},"INTEGER")," type, since the number of goals scored by each team is an integer."),(0,s.kt)("p",null,"We introduce the constraint that the game cannot end in a tie. The system should prohibit the user from setting an identical number of goals for both teams in the game, and issue a message with the specified text."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT hostGoals(Game game) = guestGoals(game) MESSAGE 'The game cannot end in a draw';\n")),(0,s.kt)("h3",{id:"determining-the-winner-of-the-game"},"Determining the winner of the game"),(0,s.kt)("p",null,"We determine the winner of the game - the team that has scored more goals than its opponent."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"winner(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN hostTeam(game)\n                    ELSE guestTeam(game);\n")),(0,s.kt)("p",null,"Here we use the operator ",(0,s.kt)("a",{parentName:"p",href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},(0,s.kt)("inlineCode",{parentName:"a"},"IF... THEN... ELSE")),", which checks the condition that the host team in this game has scored more goals than the guest team. If it is met, the winner is the home team; if not, the guest team."),(0,s.kt)("p",null,"By a similar principle, the team that participated in the game and scored fewer goals than its opponent will be considered the loser."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"looser(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN guestTeam(game)\n                    ELSE hostTeam(game);\n")),(0,s.kt)("h3",{id:"determining-game-result"},"Determining game result"),(0,s.kt)("p",null,"We introduce the concept of the possible game result with a predefined set of values: regular-time win, overtime win, penalty shootout win."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS GameResult 'G/R' {\n    win 'W',\n    winOT 'LO',\n    winSO 'LB'\n}\n")),(0,s.kt)("p",null,"For this purpose we create a ",(0,s.kt)("inlineCode",{parentName:"p"},"GameResult")," class and add three ",(0,s.kt)("a",{parentName:"p",href:"/Static_objects"},"static objects")," to it that are specified using expressions specified in braces ",(0,s.kt)("inlineCode",{parentName:"p"},"{ }"),". In this case, the values ",(0,s.kt)("inlineCode",{parentName:"p"},"win"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"winOT"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"winSO")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"W"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"OW"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"SW")," will be stored in the system properties ",(0,s.kt)("inlineCode",{parentName:"p"},"staticName")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"staticCaption"),", respectively."),(0,s.kt)("p",null,"We create the ",(0,s.kt)("inlineCode",{parentName:"p"},"resultName")," property, which will return the caption of the game result (",(0,s.kt)("inlineCode",{parentName:"p"},"W"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"OW"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"SW"),"). To do this, we take the system property ",(0,s.kt)("inlineCode",{parentName:"p"},"staticCaption"),", which is supported for all objects in the system, and constrain its signature using the ",(0,s.kt)("inlineCode",{parentName:"p"},"IF")," operator, indicating that the object must be of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Game")," class. This property is added to the ",(0,s.kt)("inlineCode",{parentName:"p"},"base")," property group so that it appears in the automatic dialog for selecting an object of the ",(0,s.kt)("inlineCode",{parentName:"p"},"GameResult")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"resultName 'Name' (GameResult game) = staticCaption(game) IF game IS GameResult IN base;\n")),(0,s.kt)("p",null,"We determine the result of a particular game. In case when one of the teams won by 2 or more goals, the game result is considered a regular-time win. If not, and only if not, the game result (the type of win for a given score) will be set by the user. However, the user cannot set a regular-time win as the game result."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"userResult = DATA GameResult (Game);\nresult (Game game) = OVERRIDE userResult(game),\n    (GameResult.win IF ((hostGoals(game) (-) guestGoals(game)) > 1 OR (guestGoals(game) (-) hostGoals(game)) > 1));\nresultName 'G/R' (Game game) = resultName(result(game));\n\nCONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) > 1 OR (hostGoals(game) (-) guestGoals(game)) < -1) AND userResult(game)\n    MESSAGE 'The result of the game is determined automatically';\n")),(0,s.kt)("p",null,"To determine the game result, the ",(0,s.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," operator is used, which returns the first non-",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," value in the order in which expressions are specified. In this case, calculating the ",(0,s.kt)("inlineCode",{parentName:"p"},"result")," property will return either an object of the static class ",(0,s.kt)("inlineCode",{parentName:"p"},"GameResult.win"),", if the goal difference in the game is greater than ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),", or the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"userResult")," data property."),(0,s.kt)("p",null,"In order to always determine a result for the game, we create a constraint that ensures that the user sets the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"userResult")," property if the result is not calculated based on the game score."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) < 2 AND (hostGoals(game) (-) guestGoals(game)) > -2) AND NOT userResult(game)\n    MESSAGE 'Specify the result of the game';\n")),(0,s.kt)("p",null,"The result of the ",(0,s.kt)("inlineCode",{parentName:"p"},"NOT userResult(game)")," expression will be true only if ",(0,s.kt)("inlineCode",{parentName:"p"},"userResult(game)")," is not defined (that is, if it is ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),"). Thus, the constraint will be violated if the score difference is ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),", and the type of win is not specified by the user."),(0,s.kt)("h3",{id:"creating-a-score-table"},"Creating a score table"),(0,s.kt)("p",null,"The score table is the ranking of the teams in a tournament - a list of teams sorted by ranking."),(0,s.kt)("p",null,"We define the indicators that determine the team's place on the scoreboard:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"number of games played by the team at home and away, and their total number  ",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"hostGamesPlayed = GROUP SUM 1 BY hostTeam(Game game);\nguestGamesPlayed = GROUP SUM 1 BY guestTeam(Game game);\ngamesPlayed 'G' (Team team) = hostGamesPlayed(team) (+) guestGamesPlayed(team);\n")))),(0,s.kt)("p",null,"Here, the construction ",(0,s.kt)("inlineCode",{parentName:"p"},"(+)")," is used instead of the arithmetic ",(0,s.kt)("inlineCode",{parentName:"p"},"+")," to obtain the correct result if at least one of the terms has a value of ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),". Using ",(0,s.kt)("inlineCode",{parentName:"p"},"(+)")," in this case is equivalent to replacing a possible ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),". If one of the terms is ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),", then using the arithmetic ",(0,s.kt)("inlineCode",{parentName:"p"},"+")," will also result in a value of ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,s.kt)("p",null,"To determine the number of games played by the team at home and away, the ",(0,s.kt)("a",{parentName:"p",href:"/Grouping_GROUP"},(0,s.kt)("inlineCode",{parentName:"a"},"GROUP SUM"))," operator is used, which allows you to get the sum of the calculation results of a given expression for objects of a certain class, grouped by one or more of their attributes (similar to subtotals in Excel). Here the number ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," is specified for summation, and all games are grouped by guest team and host team (the ",(0,s.kt)("inlineCode",{parentName:"p"},"BY")," block). As a result, for example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"hostGamesPlayed")," property determines for the team (since the result of the ",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeam")," property calculation is the ",(0,s.kt)("inlineCode",{parentName:"p"},"Team"),"-class object) the number (that is, the sum of the number ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," for all games where the host team is equal to the defined one) of games played as hosts (the ",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeam")," property is specified only for objects of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Game")," class). With this calculation the system analyzes all games entered into the system."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"number of games won in regular time, in overtime, and in extra time  "),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"gamesWonBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY winner(Game game), result(game)](team, type), 0;\n\ngamesWon 'W' (Team team) = gamesWonBy(team, GameResult.win);\ngamesWonOT 'WO' (Team team) = gamesWonBy(team, GameResult.winOT);\ngamesWonSO 'WB' (Team team) = gamesWonBy(team, GameResult.winSO);\n")))),(0,s.kt)("p",null,"Since the logic for determining the number of wins of each type for a team is almost identical, we create and use the intermediate property ",(0,s.kt)("inlineCode",{parentName:"p"},"gamesWonByResult"),", which is defined for a pair of objects (arguments). This property calculates for the team (first argument) the number of wins of a given type (second argument). The value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"gamesWonBy")," property is calculated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," operator, which takes as input an expression specified in brackets ",(0,s.kt)("inlineCode",{parentName:"p"},"[...]")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),". If the expression value is ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),", the result of the whole property will be the value ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),". A nested expression is specified in square brackets using the ",(0,s.kt)("a",{parentName:"p",href:"/Grouping_GROUP"},(0,s.kt)("inlineCode",{parentName:"a"},"GROUP SUM"))," construct. Using a given expression in brackets is identical to using a previously defined property with a similar expression. Thus, the construction ",(0,s.kt)("inlineCode",{parentName:"p"},"[...]")," allows you to simply reduce the number of lines of code. Here, ",(0,s.kt)("a",{parentName:"p",href:"/Grouping_GROUP"},(0,s.kt)("inlineCode",{parentName:"a"},"GROUP SUM"))," returns the total sum on number ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," for all games grouped by game winner and game result."),(0,s.kt)("p",null,"The total result of the ",(0,s.kt)("inlineCode",{parentName:"p"},"gamesWonByResult")," property will be the number of wins of a given type for a given team, or zero if the team did not have any wins of this type (that is, if ",(0,s.kt)("inlineCode",{parentName:"p"},"[GROUP SUM 1 BY winner(Game game), result(game)]")," for a given team and type of win is ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),")."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"number of games played in regular time, in overtime and in extra time (determined by analogy with the above-specified properties of the number of wins)  "),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"gamesLostBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY looser(Game game), result(game)](team, type), 0;\n\ngamesLost 'L' (Team team) = gamesLostBy(team, GameResult.win);\ngamesLostOT 'LO' (Team team) = gamesLostBy(team, GameResult.winOT);\ngamesLostSO 'LB' (Team team) = gamesLostBy(team, GameResult.winSO);\n")))),(0,s.kt)("p",null,"We calculate the number of points scored by the team in the tournament. The calculation is the sum of the number of wins of a particular type for each team, multiplied by the number of points awarded."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"points 'Points' (Team team) = gamesWon(team) * 3 + (gamesWonSO(team) + gamesWonOT(team)) * 2 + gamesLostOT(team) + gamesLostSO(team);\n")),(0,s.kt)("p",null,"To be used as additional indicators for ranking teams, we calculate the total number of goals scored and missed by the team."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"hostGoalsScored = GROUP SUM hostGoals(Game game) BY hostTeam(game);\nguestGoalsScored = GROUP SUM guestGoals(Game game) BY guestTeam(game);\ngoalsScored 'Scored goals' (Team team) = OVERRIDE hostGoalsScored(team) (+) guestGoalsScored(team), 0 IF team IS Team;\n\nhostGoalsConceded = GROUP SUM guestGoals(Game game) BY hostTeam(game);\nguestGoalsConceded = GROUP SUM hostGoals(Game game) BY guestTeam(game);\ngoalsConceded 'Conceded goals' (Team team) = OVERRIDE hostGoalsConceded(team) (+) guestGoalsConceded(team), 0 IF team IS Team;\n")),(0,s.kt)("p",null,"We determine the place of the team on the scoreboard."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"place 'Rank' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team), gamesWonOT(team), gamesWonSO(team),\n                                               (OVERRIDE goalsScored(team) (-) goalsConceded(team), 0), goalsScored(team);\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"place"),' property "Team place on the score table" is determined using the construction ',(0,s.kt)("a",{parentName:"p",href:"/Partitioning_sorting_PARTITION_..._ORDER"},(0,s.kt)("inlineCode",{parentName:"a"},"PARTITION SUM")),", which for all objects of a certain class in a cumulative total, the sequence of which is specified by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ORDER")," operator, calculates the sum of the results of the calculation of a specified expression. It is important to remember that the values of all properties involved in determining the order must not be ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),". For this purpose, the penultimate expression uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," operator so that the number 0 is used instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,s.kt)("p",null,"Thus, the logic for determining the ",(0,s.kt)("inlineCode",{parentName:"p"},"place")," property for each command is as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"all teams are arranged in a sequence (ranked) in descending order of the values of certain parameters (number of points scored, games won in regular time, and other properties specified after the ",(0,s.kt)("inlineCode",{parentName:"li"},"ORDER DESC")," operator)"),(0,s.kt)("li",{parentName:"ul"},"The sum of the values of the specified ",(0,s.kt)("inlineCode",{parentName:"li"},"SUM")," expression (in this case, number ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),") is calculated for each team. The sum is calculated for all teams preceding that team in the ranked list (including that team). That is, ",(0,s.kt)("inlineCode",{parentName:"li"},"1")," for the first team, ",(0,s.kt)("inlineCode",{parentName:"li"},"1+1")," for the second, ",(0,s.kt)("inlineCode",{parentName:"li"},"1+1+1")," for the third, etc.")),(0,s.kt)("h2",{id:"defining-view-logic"},"Defining view logic"),(0,s.kt)("p",null,"We add an interface that allows you to work with the developed system, entering data into the system and obtaining the necessary information from it. The form being created will consist of two vertically arranged blocks, in the upper of which the user will be able to add, modify, and delete games with all their attributes, while in the lower one there will be a score table displaying the results of the games and allowing to add or delete teams and change their names."),(0,s.kt)("p",null,"We declare the form with a name and caption. We add to the form a block of objects of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Game")," class with all the properties defined in the system. We also place a button on the form for adding a new game and deleting it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM MainForm 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n;\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"FORM")," statement creates an empty form with ",(0,s.kt)("a",{parentName:"p",href:"/Form_structure"},"a certain default functionality"),". Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"OBJECTS game=Game")," expression, a ",(0,s.kt)("inlineCode",{parentName:"p"},"game")," object is added to the form: a table view block containing all instances of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Game")," class entered in the system. Using the expression ",(0,s.kt)("inlineCode",{parentName:"p"},"PROPERTIES(game)"),' with a the subsequent listing of a subset of properties, the specified properties are added to the form, and objects of the "game" block are passed to them as arguments. In addition to previously created properties, the ',(0,s.kt)("a",{parentName:"p",href:"/Actions"},"actions")," ",(0,s.kt)("inlineCode",{parentName:"p"},"NEW")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," are also placed on the form, which will visually appear as buttons and allow you to add and remove objects of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Game")," class."),(0,s.kt)("p",null,"Data properties displayed on a form that are of a primitive type (",(0,s.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"hostGoals"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"guestGoals"),") will visually appear as cells that can be filled and changed by the user. Calculated properties that return an attribute of another object (",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeamName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"guestTeamName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"resultName"),") will appear as cells. When these are clicked, a dialog box with the list of their objects and base group properties will be shown (for example, when clicking on the cell ",(0,s.kt)("inlineCode",{parentName:"p"},"hostTeamName"),' "Guests" a dialog box appears with the list of teams). In the dialog box you can select one of the objects, thus changing the property value for the object of the original form (for example, changing the game host team).'),(0,s.kt)("p",null,"We extend the form by adding a score table block to it. The score table will be shown as a list of teams (objects of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Team")," class) with their statistical indicators, sorted by rating using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ORDERS")," operator."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM MainForm\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The above form can be defined with a single block of code without using the ",(0,s.kt)("inlineCode",{parentName:"p"},"EXTEND FORM")," statement."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM MainFormSingle 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n")))),(0,s.kt)("p",null,"We place the created form on the main menu of the program - the predefined navigator ",(0,s.kt)("inlineCode",{parentName:"p"},"root")," folder - and indicate that it should be positioned by the very first element in front of the system menu item ",(0,s.kt)("inlineCode",{parentName:"p"},"'Administration'"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW MainForm FIRST;\n}\n")),(0,s.kt)("p",null,"The process of creating an information system is completed."),(0,s.kt)("h2",{id:"the-complete-source-code-on-github"},"The complete source code (on ",(0,s.kt)("a",{parentName:"h2",href:"https://github.com/lsfusion/samples/tree/master/hockeystats"},"GitHub"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE HockeyStats;\n// logic description: https://documentation.lsfusion.org/pages/viewpage.action?pageId=2228240\nREQUIRE System, Utils;\n\nCLASS Team 'Team';\n\nname 'Team name' = DATA STRING[30] (Team) IN base;\n\nCLASS Game 'Game';\n\ndate 'Date' = DATA DATE (Game);\nhostTeam = DATA Team (Game);\nguestTeam = DATA Team (Game);\nhostTeamName 'Hosts' (Game game) = name(hostTeam(game));\nguestTeamName 'Guests' (Game game) = name(guestTeam(game));\n\nCONSTRAINT hostTeam(Game team) = guestTeam(team) CHECKED BY hostTeam, guestTeam MESSAGE 'Host and guest teams must be different';\n\nhostGoals 'H goals' = DATA INTEGER (Game);\nguestGoals 'G goals' = DATA INTEGER (Game);\n\nCONSTRAINT hostGoals(Game game) = guestGoals(game) MESSAGE 'The game cannot end in a draw';\n\nwinner(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN hostTeam(game)\n                    ELSE guestTeam(game);\n\nlooser(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN guestTeam(game)\n                    ELSE hostTeam(game);\n\nCLASS GameResult 'G/R' {\n    win 'W',\n    winOT 'LO',\n    winSO 'LB'\n}\n\nresultName 'Name' (GameResult game) = staticCaption(game) IF game IS GameResult IN base;\n\nuserResult = DATA GameResult (Game);\nresult (Game game) = OVERRIDE userResult(game),\n    (GameResult.win IF ((hostGoals(game) (-) guestGoals(game)) > 1 OR (guestGoals(game) (-) hostGoals(game)) > 1));\nresultName 'G/R' (Game game) = resultName(result(game));\n\nCONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) > 1 OR (hostGoals(game) (-) guestGoals(game)) < -1) AND userResult(game)\n    MESSAGE 'The result of the game is determined automatically';\n\nCONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) < 2 AND (hostGoals(game) (-) guestGoals(game)) > -2) AND NOT userResult(game)\n    MESSAGE 'Specify the result of the game';\n\nhostGamesPlayed = GROUP SUM 1 BY hostTeam(Game game);\nguestGamesPlayed = GROUP SUM 1 BY guestTeam(Game game);\ngamesPlayed 'G' (Team team) = hostGamesPlayed(team) (+) guestGamesPlayed(team);\n\ngamesWonBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY winner(Game game), result(game)](team, type), 0;\n\ngamesWon 'W' (Team team) = gamesWonBy(team, GameResult.win);\ngamesWonOT 'WO' (Team team) = gamesWonBy(team, GameResult.winOT);\ngamesWonSO 'WB' (Team team) = gamesWonBy(team, GameResult.winSO);\n\ngamesLostBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY looser(Game game), result(game)](team, type), 0;\n\ngamesLost 'L' (Team team) = gamesLostBy(team, GameResult.win);\ngamesLostOT 'LO' (Team team) = gamesLostBy(team, GameResult.winOT);\ngamesLostSO 'LB' (Team team) = gamesLostBy(team, GameResult.winSO);\n\npoints 'Points' (Team team) = gamesWon(team) * 3 + (gamesWonSO(team) + gamesWonOT(team)) * 2 + gamesLostOT(team) + gamesLostSO(team);\n\nhostGoalsScored = GROUP SUM hostGoals(Game game) BY hostTeam(game);\nguestGoalsScored = GROUP SUM guestGoals(Game game) BY guestTeam(game);\ngoalsScored 'Scored goals' (Team team) = OVERRIDE hostGoalsScored(team) (+) guestGoalsScored(team), 0 IF team IS Team;\n\nhostGoalsConceded = GROUP SUM guestGoals(Game game) BY hostTeam(game);\nguestGoalsConceded = GROUP SUM hostGoals(Game game) BY guestTeam(game);\ngoalsConceded 'Conceded goals' (Team team) = OVERRIDE hostGoalsConceded(team) (+) guestGoalsConceded(team), 0 IF team IS Team;\n\nplace 'Rank' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team), gamesWonOT(team), gamesWonSO(team),\n                                               (OVERRIDE goalsScored(team) (-) goalsConceded(team), 0), goalsScored(team);\n\nFORM MainForm 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n;\n\nEXTEND FORM MainForm\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n\nFORM MainFormSingle 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n\nNAVIGATOR {\n    NEW MainForm FIRST;\n}\n\nCLASS Event;\ndate = DATA DATE (Event);\ndate(Event e) <- currentDate() WHEN SET(e IS Event);\ntitle = DATA STRING (Event);\ntitle(Event e) <- 'Event' + e WHEN SET(e IS Event);\n\nFORM calendar\n    OBJECTS e=Event CUSTOM 'calendar'\n    PROPERTIES (e) date, title, NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW calendar;\n}\n")))}p.isMDXComponent=!0}}]);