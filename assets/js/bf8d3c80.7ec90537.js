"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[68969],{89012:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var s=t(74848),n=t(28453);const o={title:"Score table"},i=void 0,r={id:"Score_table",title:"Score table",description:'"Score table" task description',source:"@site/versioned_docs/version-v4/Score_table.md",sourceDirName:".",slug:"/Score_table",permalink:"/v4/Score_table",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Score_table.md",tags:[],version:"v4",lastUpdatedAt:1659620209e3,frontMatter:{title:"Score table"},sidebar:"learn",previous:{title:"Examples",permalink:"/v4/Examples"},next:{title:"Materials management",permalink:"/v4/Materials_management"}},l={},m=[{value:"&quot;Score table&quot; task description",id:"score-table-task-description",level:2},{value:"Defining the domain logic",id:"defining-the-domain-logic",level:2},{value:"Module declaration",id:"module-declaration",level:3},{value:"Team definition",id:"team-definition",level:3},{value:"Game definition",id:"game-definition",level:3},{value:"Determining the winner of the game",id:"determining-the-winner-of-the-game",level:3},{value:"Determining game result",id:"determining-game-result",level:3},{value:"Creating a score table",id:"creating-a-score-table",level:3},{value:"Defining view logic",id:"defining-view-logic",level:2},{value:"The complete source code (on GitHub)",id:"the-complete-source-code-on-github",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"score-table-task-description",children:'"Score table" task description'}),"\n",(0,s.jsxs)(a.p,{children:["This information system, created using the ",(0,s.jsx)(a.strong,{children:"lsFusion Platform"}),", should contain the functionality for keeping score at a hockey tournament."]}),"\n",(0,s.jsx)(a.p,{children:"A tournament is understood to mean a subset of games between teams (with two teams participating in each game), which result in points being awarded to the teams."}),"\n",(0,s.jsx)(a.p,{children:"In each game, the result of each game can be a regular-time win of one of the teams (the winning team receives 3 points), an overtime win (the winning team receives 2 points, while the losing team receives 1), or a penalty shootout win (the winning team receives 2 points, while the losing team receives 1)."}),"\n",(0,s.jsx)(a.p,{children:"A team's score table ranking is determined by the total number of points. In case of a tie, additional parameters are considered: number of regular-time victories, number of overtime victories, number of penalty shootout victories, the difference between scores and misses, number of scores. Additional parameters for determining the final ranking are applied consecutively in a specified order until a status is achieved in which the results of the teams are uniquely ranked."}),"\n",(0,s.jsx)(a.h2,{id:"defining-the-domain-logic",children:"Defining the domain logic"}),"\n",(0,s.jsx)(a.h3,{id:"module-declaration",children:"Module declaration"}),"\n",(0,s.jsxs)(a.p,{children:["We declare a ",(0,s.jsx)(a.a,{href:"/v4/Modules",children:"module"})," within which the required functionality will be implemented. We assign an arbitrary name to the module (for example, ",(0,s.jsx)(a.code,{children:"HockeyStats"}),")."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"MODULE HockeyStats;\n"})}),"\n",(0,s.jsxs)(a.p,{children:["We define the use of functionality from other modules in the ",(0,s.jsx)(a.code,{children:"HockeyStats"})," module. In particular, we need the system module ",(0,s.jsx)(a.code,{children:"System"}),", in which some system elements used in the example are declared."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"REQUIRE System, Utils;\n"})}),"\n",(0,s.jsx)(a.h3,{id:"team-definition",children:"Team definition"}),"\n",(0,s.jsxs)(a.p,{children:["We introduce the concept of a team, for which we create a separate ",(0,s.jsx)(a.a,{href:"/v4/Classes",children:"class"})," using the corresponding ",(0,s.jsxs)(a.a,{href:"/v4/CLASS_statement",children:["statement ",(0,s.jsx)(a.code,{children:"CLASS"})]}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"CLASS Team 'Team';\n"})}),"\n",(0,s.jsxs)(a.p,{children:["We assign a name to the class created (for example, ",(0,s.jsx)(a.code,{children:"Team"}),"), which will subsequently be used when building ",(0,s.jsx)(a.a,{href:"/v4/Expression",children:"expressions"}),", as well as a caption to display on custom forms (for example, ",(0,s.jsx)(a.code,{children:"'Team'"}),")."]}),"\n",(0,s.jsxs)(a.p,{children:["So that all teams can be easily identified when working with forms created later, we create a name for the team. In other words, we create a ",(0,s.jsx)(a.code,{children:"name"})," ",(0,s.jsx)(a.a,{href:"/v4/Properties",children:"property"})," that can be defined for objects of the ",(0,s.jsx)(a.code,{children:"Team"})," class."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"name 'Team name' = DATA STRING[30] (Team) IN base;\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Thus, the team name is a ",(0,s.jsx)(a.a,{href:"/v4/Data_properties_DATA",children:"data"})," (user-entered) string-type property. Using the ",(0,s.jsx)(a.code,{children:"IN"})," option, the created property is added to the predefined ",(0,s.jsx)(a.code,{children:"base"})," ",(0,s.jsx)(a.a,{href:"/v4/Groups_of_properties_and_actions",children:"property group"}),". Object properties belonging to the ",(0,s.jsx)(a.code,{children:"base"})," group will be automatically displayed on the dialog form for selecting an object of the ",(0,s.jsx)(a.code,{children:"Team"})," class."]}),"\n",(0,s.jsx)(a.h3,{id:"game-definition",children:"Game definition"}),"\n",(0,s.jsx)(a.p,{children:"We introduce the concept of the game and its attributes: date, participants (host team and guest team), and their names."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"CLASS Game 'Game';\n\ndate 'Date' = DATA DATE (Game);\nhostTeam = DATA Team (Game);\nguestTeam = DATA Team (Game);\nhostTeamName 'Hosts' (Game game) = name(hostTeam(game));\nguestTeamName 'Guests' (Game game) = name(guestTeam(game));\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"hostTeam"})," and ",(0,s.jsx)(a.code,{children:"guestTeam"})," properties are ",(0,s.jsx)(a.a,{href:"/v4/Data_properties_DATA",children:"data"})," object properties of a game, whose values are links to the host team and guest team, respectively (that is, to specific ",(0,s.jsx)(a.code,{children:"Team"}),"-class objects). Properties of the team names of the game hosts and guests (",(0,s.jsx)(a.code,{children:"hostTeamName"})," and ",(0,s.jsx)(a.code,{children:"guestTeamName"}),") are created for subsequent use on forms. If the ",(0,s.jsx)(a.code,{children:"hostTeam"})," and ",(0,s.jsx)(a.code,{children:"guestTeam"})," properties are added to the form, the user will see the internal IDs of objects from the database."]}),"\n",(0,s.jsx)(a.p,{children:"We introduce the constraint that the game participants must be two different teams."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"CONSTRAINT hostTeam(Game team) = guestTeam(team) CHECKED BY hostTeam, guestTeam MESSAGE 'Host and guest teams must be different';\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The operating mechanism of this expression is as follows: when the host team or guest team of a game changes, the system checks the condition of equality of these teams ",(0,s.jsx)(a.code,{children:"hostTeam(team) == guestTeam(team)"}),", and if it is met the system blocks the application of changes to the database, and also gives the user the specified message ",(0,s.jsx)(a.code,{children:"'Host and guest teams must be different'"}),". In other words, the result of the expression specified after the ",(0,s.jsx)(a.code,{children:"CONSTRAINT"})," operator must be ",(0,s.jsx)(a.code,{children:"NULL"}),". In all other cases the restriction will be considered violated.  In addition, thanks to the ",(0,s.jsx)(a.code,{children:"CHECKED BY"})," block, the created constraint will filter teams when selecting a home team or a guest team for a game (that is, it will exclude the team already set as the opponent from the list of teams in the dialog that appears upon selecting a team)."]}),"\n",(0,s.jsx)(a.p,{children:"We define the number of goals scored by each team during the game."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"hostGoals 'H goals' = DATA INTEGER (Game);\nguestGoals 'G goals' = DATA INTEGER (Game);\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The defined properties use the ",(0,s.jsx)(a.code,{children:"INTEGER"})," type, since the number of goals scored by each team is an integer."]}),"\n",(0,s.jsx)(a.p,{children:"We introduce the constraint that the game cannot end in a tie. The system should prohibit the user from setting an identical number of goals for both teams in the game, and issue a message with the specified text."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"CONSTRAINT hostGoals(Game game) = guestGoals(game) MESSAGE 'The game cannot end in a draw';\n"})}),"\n",(0,s.jsx)(a.h3,{id:"determining-the-winner-of-the-game",children:"Determining the winner of the game"}),"\n",(0,s.jsx)(a.p,{children:"We determine the winner of the game - the team that has scored more goals than its opponent."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"winner(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN hostTeam(game)\n                    ELSE guestTeam(game);\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Here we use the operator ",(0,s.jsx)(a.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:(0,s.jsx)(a.code,{children:"IF... THEN... ELSE"})}),", which checks the condition that the host team in this game has scored more goals than the guest team. If it is met, the winner is the home team; if not, the guest team."]}),"\n",(0,s.jsx)(a.p,{children:"By a similar principle, the team that participated in the game and scored fewer goals than its opponent will be considered the loser."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"looser(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN guestTeam(game)\n                    ELSE hostTeam(game);\n"})}),"\n",(0,s.jsx)(a.h3,{id:"determining-game-result",children:"Determining game result"}),"\n",(0,s.jsx)(a.p,{children:"We introduce the concept of the possible game result with a predefined set of values: regular-time win, overtime win, penalty shootout win."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"CLASS GameResult 'G/R' {\n    win 'W',\n    winOT 'LO',\n    winSO 'LB'\n}\n"})}),"\n",(0,s.jsxs)(a.p,{children:["For this purpose we create a ",(0,s.jsx)(a.code,{children:"GameResult"})," class and add three ",(0,s.jsx)(a.a,{href:"/v4/Static_objects",children:"static objects"})," to it that are specified using expressions specified in braces ",(0,s.jsx)(a.code,{children:"{ }"}),". In this case, the values ",(0,s.jsx)(a.code,{children:"win"}),", ",(0,s.jsx)(a.code,{children:"winOT"}),", ",(0,s.jsx)(a.code,{children:"winSO"})," and ",(0,s.jsx)(a.code,{children:"W"}),", ",(0,s.jsx)(a.code,{children:"OW"}),", ",(0,s.jsx)(a.code,{children:"SW"})," will be stored in the system properties ",(0,s.jsx)(a.code,{children:"staticName"})," and ",(0,s.jsx)(a.code,{children:"staticCaption"}),", respectively."]}),"\n",(0,s.jsxs)(a.p,{children:["We create the ",(0,s.jsx)(a.code,{children:"resultName"})," property, which will return the caption of the game result (",(0,s.jsx)(a.code,{children:"W"}),", ",(0,s.jsx)(a.code,{children:"OW"}),", or ",(0,s.jsx)(a.code,{children:"SW"}),"). To do this, we take the system property ",(0,s.jsx)(a.code,{children:"staticCaption"}),", which is supported for all objects in the system, and constrain its signature using the ",(0,s.jsx)(a.code,{children:"IF"})," operator, indicating that the object must be of the ",(0,s.jsx)(a.code,{children:"Game"})," class. This property is added to the ",(0,s.jsx)(a.code,{children:"base"})," property group so that it appears in the automatic dialog for selecting an object of the ",(0,s.jsx)(a.code,{children:"GameResult"})," class."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"resultName 'Name' (GameResult game) = staticCaption(game) IF game IS GameResult IN base;\n"})}),"\n",(0,s.jsx)(a.p,{children:"We determine the result of a particular game. In case when one of the teams won by 2 or more goals, the game result is considered a regular-time win. If not, and only if not, the game result (the type of win for a given score) will be set by the user. However, the user cannot set a regular-time win as the game result."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"userResult = DATA GameResult (Game);\nresult (Game game) = OVERRIDE userResult(game),\n    (GameResult.win IF ((hostGoals(game) (-) guestGoals(game)) > 1 OR (guestGoals(game) (-) hostGoals(game)) > 1));\nresultName 'G/R' (Game game) = resultName(result(game));\n\nCONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) > 1 OR (hostGoals(game) (-) guestGoals(game)) < -1) AND userResult(game)\n    MESSAGE 'The result of the game is determined automatically';\n"})}),"\n",(0,s.jsxs)(a.p,{children:["To determine the game result, the ",(0,s.jsx)(a.code,{children:"OVERRIDE"})," operator is used, which returns the first non-",(0,s.jsx)(a.code,{children:"NULL"})," value in the order in which expressions are specified. In this case, calculating the ",(0,s.jsx)(a.code,{children:"result"})," property will return either an object of the static class ",(0,s.jsx)(a.code,{children:"GameResult.win"}),", if the goal difference in the game is greater than ",(0,s.jsx)(a.code,{children:"1"}),", or the value of the ",(0,s.jsx)(a.code,{children:"userResult"})," data property."]}),"\n",(0,s.jsxs)(a.p,{children:["In order to always determine a result for the game, we create a constraint that ensures that the user sets the value of the ",(0,s.jsx)(a.code,{children:"userResult"})," property if the result is not calculated based on the game score."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"CONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) < 2 AND (hostGoals(game) (-) guestGoals(game)) > -2) AND NOT userResult(game)\n    MESSAGE 'Specify the result of the game';\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The result of the ",(0,s.jsx)(a.code,{children:"NOT userResult(game)"})," expression will be true only if ",(0,s.jsx)(a.code,{children:"userResult(game)"})," is not defined (that is, if it is ",(0,s.jsx)(a.code,{children:"NULL"}),"). Thus, the constraint will be violated if the score difference is ",(0,s.jsx)(a.code,{children:"1"}),", and the type of win is not specified by the user."]}),"\n",(0,s.jsx)(a.h3,{id:"creating-a-score-table",children:"Creating a score table"}),"\n",(0,s.jsx)(a.p,{children:"The score table is the ranking of the teams in a tournament - a list of teams sorted by ranking."}),"\n",(0,s.jsx)(a.p,{children:"We define the indicators that determine the team's place on the scoreboard:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"number of games played by the team at home and away, and their total number"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"hostGamesPlayed = GROUP SUM 1 BY hostTeam(Game game);\nguestGamesPlayed = GROUP SUM 1 BY guestTeam(Game game);\ngamesPlayed 'G' (Team team) = hostGamesPlayed(team) (+) guestGamesPlayed(team);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Here, the construction ",(0,s.jsx)(a.code,{children:"(+)"})," is used instead of the arithmetic ",(0,s.jsx)(a.code,{children:"+"})," to obtain the correct result if at least one of the terms has a value of ",(0,s.jsx)(a.code,{children:"NULL"}),". Using ",(0,s.jsx)(a.code,{children:"(+)"})," in this case is equivalent to replacing a possible ",(0,s.jsx)(a.code,{children:"NULL"})," with ",(0,s.jsx)(a.code,{children:"0"}),". If one of the terms is ",(0,s.jsx)(a.code,{children:"NULL"}),", then using the arithmetic ",(0,s.jsx)(a.code,{children:"+"})," will also result in a value of ",(0,s.jsx)(a.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["To determine the number of games played by the team at home and away, the ",(0,s.jsx)(a.a,{href:"/v4/Grouping_GROUP",children:(0,s.jsx)(a.code,{children:"GROUP SUM"})})," operator is used, which allows you to get the sum of the calculation results of a given expression for objects of a certain class, grouped by one or more of their attributes (similar to subtotals in Excel). Here the number ",(0,s.jsx)(a.code,{children:"1"})," is specified for summation, and all games are grouped by guest team and host team (the ",(0,s.jsx)(a.code,{children:"BY"})," block). As a result, for example, the ",(0,s.jsx)(a.code,{children:"hostGamesPlayed"})," property determines for the team (since the result of the ",(0,s.jsx)(a.code,{children:"hostTeam"})," property calculation is the ",(0,s.jsx)(a.code,{children:"Team"}),"-class object) the number (that is, the sum of the number ",(0,s.jsx)(a.code,{children:"1"})," for all games where the host team is equal to the defined one) of games played as hosts (the ",(0,s.jsx)(a.code,{children:"hostTeam"})," property is specified only for objects of the ",(0,s.jsx)(a.code,{children:"Game"})," class). With this calculation the system analyzes all games entered into the system."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"number of games won in regular time, in overtime, and in extra time"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"gamesWonBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY winner(Game game), result(game)](team, type), 0;\n\ngamesWon 'W' (Team team) = gamesWonBy(team, GameResult.win);\ngamesWonOT 'WO' (Team team) = gamesWonBy(team, GameResult.winOT);\ngamesWonSO 'WB' (Team team) = gamesWonBy(team, GameResult.winSO);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Since the logic for determining the number of wins of each type for a team is almost identical, we create and use the intermediate property ",(0,s.jsx)(a.code,{children:"gamesWonByResult"}),", which is defined for a pair of objects (arguments). This property calculates for the team (first argument) the number of wins of a given type (second argument). The value of the ",(0,s.jsx)(a.code,{children:"gamesWonBy"})," property is calculated with the ",(0,s.jsx)(a.code,{children:"OVERRIDE"})," operator, which takes as input an expression specified in brackets ",(0,s.jsx)(a.code,{children:"[...]"})," and ",(0,s.jsx)(a.code,{children:"0"}),". If the expression value is ",(0,s.jsx)(a.code,{children:"NULL"}),", the result of the whole property will be the value ",(0,s.jsx)(a.code,{children:"0"}),". A nested expression is specified in square brackets using the ",(0,s.jsx)(a.a,{href:"/v4/Grouping_GROUP",children:(0,s.jsx)(a.code,{children:"GROUP SUM"})})," construct. Using a given expression in brackets is identical to using a previously defined property with a similar expression. Thus, the construction ",(0,s.jsx)(a.code,{children:"[...]"})," allows you to simply reduce the number of lines of code. Here, ",(0,s.jsx)(a.a,{href:"/v4/Grouping_GROUP",children:(0,s.jsx)(a.code,{children:"GROUP SUM"})})," returns the total sum on number ",(0,s.jsx)(a.code,{children:"1"})," for all games grouped by game winner and game result."]}),"\n",(0,s.jsxs)(a.p,{children:["The total result of the ",(0,s.jsx)(a.code,{children:"gamesWonByResult"})," property will be the number of wins of a given type for a given team, or zero if the team did not have any wins of this type (that is, if ",(0,s.jsx)(a.code,{children:"[GROUP SUM 1 BY winner(Game game), result(game)]"})," for a given team and type of win is ",(0,s.jsx)(a.code,{children:"NULL"}),")."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"number of games played in regular time, in overtime and in extra time (determined by analogy with the above-specified properties of the number of wins)"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"gamesLostBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY looser(Game game), result(game)](team, type), 0;\n\ngamesLost 'L' (Team team) = gamesLostBy(team, GameResult.win);\ngamesLostOT 'LO' (Team team) = gamesLostBy(team, GameResult.winOT);\ngamesLostSO 'LB' (Team team) = gamesLostBy(team, GameResult.winSO);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"We calculate the number of points scored by the team in the tournament. The calculation is the sum of the number of wins of a particular type for each team, multiplied by the number of points awarded."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"points 'Points' (Team team) = gamesWon(team) * 3 + (gamesWonSO(team) + gamesWonOT(team)) * 2 + gamesLostOT(team) + gamesLostSO(team);\n"})}),"\n",(0,s.jsx)(a.p,{children:"To be used as additional indicators for ranking teams, we calculate the total number of goals scored and missed by the team."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"hostGoalsScored = GROUP SUM hostGoals(Game game) BY hostTeam(game);\nguestGoalsScored = GROUP SUM guestGoals(Game game) BY guestTeam(game);\ngoalsScored 'Scored goals' (Team team) = OVERRIDE hostGoalsScored(team) (+) guestGoalsScored(team), 0 IF team IS Team;\n\nhostGoalsConceded = GROUP SUM guestGoals(Game game) BY hostTeam(game);\nguestGoalsConceded = GROUP SUM hostGoals(Game game) BY guestTeam(game);\ngoalsConceded 'Conceded goals' (Team team) = OVERRIDE hostGoalsConceded(team) (+) guestGoalsConceded(team), 0 IF team IS Team;\n"})}),"\n",(0,s.jsx)(a.p,{children:"We determine the place of the team on the scoreboard."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"place 'Rank' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team), gamesWonOT(team), gamesWonSO(team),\n                                               (OVERRIDE goalsScored(team) (-) goalsConceded(team), 0), goalsScored(team);\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"place"}),' property "Team place on the score table" is determined using the construction ',(0,s.jsx)(a.a,{href:"/v4/Partitioning_sorting_PARTITION_..._ORDER",children:(0,s.jsx)(a.code,{children:"PARTITION SUM"})}),", which for all objects of a certain class in a cumulative total, the sequence of which is specified by the ",(0,s.jsx)(a.code,{children:"ORDER"})," operator, calculates the sum of the results of the calculation of a specified expression. It is important to remember that the values of all properties involved in determining the order must not be ",(0,s.jsx)(a.code,{children:"NULL"}),". For this purpose, the penultimate expression uses the ",(0,s.jsx)(a.code,{children:"OVERRIDE"})," operator so that the number 0 is used instead of ",(0,s.jsx)(a.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["Thus, the logic for determining the ",(0,s.jsx)(a.code,{children:"place"})," property for each command is as follows:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["all teams are arranged in a sequence (ranked) in descending order of the values of certain parameters (number of points scored, games won in regular time, and other properties specified after the ",(0,s.jsx)(a.code,{children:"ORDER DESC"})," operator)"]}),"\n",(0,s.jsxs)(a.li,{children:["The sum of the values of the specified ",(0,s.jsx)(a.code,{children:"SUM"})," expression (in this case, number ",(0,s.jsx)(a.code,{children:"1"}),") is calculated for each team. The sum is calculated for all teams preceding that team in the ranked list (including that team). That is, ",(0,s.jsx)(a.code,{children:"1"})," for the first team, ",(0,s.jsx)(a.code,{children:"1+1"})," for the second, ",(0,s.jsx)(a.code,{children:"1+1+1"})," for the third, etc."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"defining-view-logic",children:"Defining view logic"}),"\n",(0,s.jsx)(a.p,{children:"We add an interface that allows you to work with the developed system, entering data into the system and obtaining the necessary information from it. The form being created will consist of two vertically arranged blocks, in the upper of which the user will be able to add, modify, and delete games with all their attributes, while in the lower one there will be a score table displaying the results of the games and allowing to add or delete teams and change their names."}),"\n",(0,s.jsxs)(a.p,{children:["We declare the form with a name and caption. We add to the form a block of objects of the ",(0,s.jsx)(a.code,{children:"Game"})," class with all the properties defined in the system. We also place a button on the form for adding a new game and deleting it."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"FORM MainForm 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n;\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"FORM"})," statement creates an empty form with ",(0,s.jsx)(a.a,{href:"/v4/Form_structure",children:"a certain default functionality"}),". Using the ",(0,s.jsx)(a.code,{children:"OBJECTS game=Game"})," expression, a ",(0,s.jsx)(a.code,{children:"game"})," object is added to the form: a table view block containing all instances of the ",(0,s.jsx)(a.code,{children:"Game"})," class entered in the system. Using the expression ",(0,s.jsx)(a.code,{children:"PROPERTIES(game)"}),' with a the subsequent listing of a subset of properties, the specified properties are added to the form, and objects of the "game" block are passed to them as arguments. In addition to previously created properties, the ',(0,s.jsx)(a.a,{href:"/v4/Actions",children:"actions"})," ",(0,s.jsx)(a.code,{children:"NEW"})," and ",(0,s.jsx)(a.code,{children:"DELETE"})," are also placed on the form, which will visually appear as buttons and allow you to add and remove objects of the ",(0,s.jsx)(a.code,{children:"Game"})," class."]}),"\n",(0,s.jsxs)(a.p,{children:["Data properties displayed on a form that are of a primitive type (",(0,s.jsx)(a.code,{children:"date"}),", ",(0,s.jsx)(a.code,{children:"hostGoals"}),", ",(0,s.jsx)(a.code,{children:"guestGoals"}),") will visually appear as cells that can be filled and changed by the user. Calculated properties that return an attribute of another object (",(0,s.jsx)(a.code,{children:"hostTeamName"}),", ",(0,s.jsx)(a.code,{children:"guestTeamName"}),", ",(0,s.jsx)(a.code,{children:"resultName"}),") will appear as cells. When these are clicked, a dialog box with the list of their objects and base group properties will be shown (for example, when clicking on the cell ",(0,s.jsx)(a.code,{children:"hostTeamName"}),' "Guests" a dialog box appears with the list of teams). In the dialog box you can select one of the objects, thus changing the property value for the object of the original form (for example, changing the game host team).']}),"\n",(0,s.jsxs)(a.p,{children:["We extend the form by adding a score table block to it. The score table will be shown as a list of teams (objects of the ",(0,s.jsx)(a.code,{children:"Team"})," class) with their statistical indicators, sorted by rating using the ",(0,s.jsx)(a.code,{children:"ORDERS"})," operator."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"EXTEND FORM MainForm\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsxs)(a.p,{children:["The above form can be defined with a single block of code without using the ",(0,s.jsx)(a.code,{children:"EXTEND FORM"})," statement."]}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"FORM MainFormSingle 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n"})})]}),"\n",(0,s.jsxs)(a.p,{children:["We place the created form on the main menu of the program - the predefined navigator ",(0,s.jsx)(a.code,{children:"root"})," folder - and indicate that it should be positioned by the very first element in front of the system menu item ",(0,s.jsx)(a.code,{children:"'Administration'"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"NAVIGATOR {\n    NEW MainForm FIRST;\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"The process of creating an information system is completed."}),"\n",(0,s.jsxs)(a.h2,{id:"the-complete-source-code-on-github",children:["The complete source code (on ",(0,s.jsx)(a.a,{href:"https://github.com/lsfusion/samples/tree/master/hockeystats",children:"GitHub"}),")"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-lsf",children:"MODULE HockeyStats;\n\nREQUIRE System, Utils;\n\nCLASS Team 'Team';\n\nname 'Team name' = DATA STRING[30] (Team) IN base;\n\nCLASS Game 'Game';\n\ndate 'Date' = DATA DATE (Game);\nhostTeam = DATA Team (Game);\nguestTeam = DATA Team (Game);\nhostTeamName 'Hosts' (Game game) = name(hostTeam(game));\nguestTeamName 'Guests' (Game game) = name(guestTeam(game));\n\nCONSTRAINT hostTeam(Game team) = guestTeam(team) CHECKED BY hostTeam, guestTeam MESSAGE 'Host and guest teams must be different';\n\nhostGoals 'H goals' = DATA INTEGER (Game);\nguestGoals 'G goals' = DATA INTEGER (Game);\n\nCONSTRAINT hostGoals(Game game) = guestGoals(game) MESSAGE 'The game cannot end in a draw';\n\nwinner(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN hostTeam(game)\n                    ELSE guestTeam(game);\n\nlooser(Game game) = IF hostGoals(game) > guestGoals(game)\n                    THEN guestTeam(game)\n                    ELSE hostTeam(game);\n\nCLASS GameResult 'G/R' {\n    win 'W',\n    winOT 'LO',\n    winSO 'LB'\n}\n\nresultName 'Name' (GameResult game) = staticCaption(game) IF game IS GameResult IN base;\n\nuserResult = DATA GameResult (Game);\nresult (Game game) = OVERRIDE userResult(game),\n    (GameResult.win IF ((hostGoals(game) (-) guestGoals(game)) > 1 OR (guestGoals(game) (-) hostGoals(game)) > 1));\nresultName 'G/R' (Game game) = resultName(result(game));\n\nCONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) > 1 OR (hostGoals(game) (-) guestGoals(game)) < -1) AND userResult(game)\n    MESSAGE 'The result of the game is determined automatically';\n\nCONSTRAINT ((hostGoals(Game game) (-) guestGoals(game)) < 2 AND (hostGoals(game) (-) guestGoals(game)) > -2) AND NOT userResult(game)\n    MESSAGE 'Specify the result of the game';\n\nhostGamesPlayed = GROUP SUM 1 BY hostTeam(Game game);\nguestGamesPlayed = GROUP SUM 1 BY guestTeam(Game game);\ngamesPlayed 'G' (Team team) = hostGamesPlayed(team) (+) guestGamesPlayed(team);\n\ngamesWonBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY winner(Game game), result(game)](team, type), 0;\n\ngamesWon 'W' (Team team) = gamesWonBy(team, GameResult.win);\ngamesWonOT 'WO' (Team team) = gamesWonBy(team, GameResult.winOT);\ngamesWonSO 'WB' (Team team) = gamesWonBy(team, GameResult.winSO);\n\ngamesLostBy(Team team, GameResult type) = OVERRIDE [GROUP SUM 1 BY looser(Game game), result(game)](team, type), 0;\n\ngamesLost 'L' (Team team) = gamesLostBy(team, GameResult.win);\ngamesLostOT 'LO' (Team team) = gamesLostBy(team, GameResult.winOT);\ngamesLostSO 'LB' (Team team) = gamesLostBy(team, GameResult.winSO);\n\npoints 'Points' (Team team) = gamesWon(team) * 3 + (gamesWonSO(team) + gamesWonOT(team)) * 2 + gamesLostOT(team) + gamesLostSO(team);\n\nhostGoalsScored = GROUP SUM hostGoals(Game game) BY hostTeam(game);\nguestGoalsScored = GROUP SUM guestGoals(Game game) BY guestTeam(game);\ngoalsScored 'Scored goals' (Team team) = OVERRIDE hostGoalsScored(team) (+) guestGoalsScored(team), 0 IF team IS Team;\n\nhostGoalsConceded = GROUP SUM guestGoals(Game game) BY hostTeam(game);\nguestGoalsConceded = GROUP SUM hostGoals(Game game) BY guestTeam(game);\ngoalsConceded 'Conceded goals' (Team team) = OVERRIDE hostGoalsConceded(team) (+) guestGoalsConceded(team), 0 IF team IS Team;\n\nplace 'Rank' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team), gamesWonOT(team), gamesWonSO(team),\n                                               (OVERRIDE goalsScored(team) (-) goalsConceded(team), 0), goalsScored(team);\n\nFORM MainForm 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n;\n\nEXTEND FORM MainForm\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n\nFORM MainFormSingle 'Score table'\n    OBJECTS game = Game\n    PROPERTIES(game) date, hostTeamName, hostGoals, guestGoals, guestTeamName, resultName, NEW, DELETE\n\n    OBJECTS team = Team\n    PROPERTIES(team) place, name, gamesPlayed, gamesWon, gamesWonOT, gamesWonSO,\n                     gamesLostSO, gamesLostOT, gamesLost, goalsScored, goalsConceded, points, NEW, DELETE\n    ORDERS place(team)\n;\n\nNAVIGATOR {\n    NEW MainForm FIRST;\n}\n\nCLASS Event;\ndate = DATA DATE (Event);\ndate(Event e) <- currentDate() WHEN SET(e IS Event);\ntitle = DATA STRING (Event);\ntitle(Event e) <- 'Event' + e WHEN SET(e IS Event);\n\nFORM calendar\n    OBJECTS e=Event CUSTOM 'calendar'\n    PROPERTIES (e) date, title, NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW calendar;\n}\n"})})]})}function d(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var s=t(96540);const n={},o=s.createContext(n);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);