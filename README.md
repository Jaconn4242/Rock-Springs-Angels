1. Description:

   This application is designed for a youth softball church league.  It is built so that the parents and players can access upcoming game information and monitor any changes to the teams game schedule. I'm expecting the main UX/UI to be accessed through mobile devices, so my primary focus is to make this as mobile friendly as possible. The client(coach) requested that the color scheme be red/white/black.

2. MVP:

   The MVP that I can produce before the teams first game (04/24/2022) will be a Home/landing Page, a Game Schedule Page, and a batting Line-up page.  This would meet the requirements of the ultimate goal which is allowing parents and players to view upcoming game information. The MVP will be presented to the coach in early April, a week or two before the teams first game.

3. User Stories:

   From the time the user hits the landing page they will have access to navigation links that direct the them to three main sections of the    application(Home Page / Meet the Team / Game Schedule).  These 3 pages are are necessary.  Optional pages would be an about section for the teams      church and a super admin where the coach can login and make changes to the game information.

4. Wireframe:

                Each page will have a HEADER:
                    - background: red
                    - Team name: white
                    - navigation icon: black

                Each page will have a FOOTER:
                    - background: dark grey
                    - copyright statement

                Each page will have it's own BODY:
                    - Home Page Component
                    - Game Schedule Component
                    - Batting Line-up

5. Mind Map:

   Original idea:  The folder structure will be controlled by data.js files.

   The folder structure will be controlled by react-router.  The body of each page will be controlled by Routes and will be nested in the application between the header and footer.  The links to the different routes/pages  will be inside the navigation icon and presented as a dropdown menu allowing users to navigate through the different pages simultaneously.  The data structure will be managed by Context.  Inside the context file I will be implementing UseEffect to perform a  TWO seperate get Request from the V school API with the data properties of:

                                                    title: "name of player"
                                                    description: "gender of player"
                                                    ImgUrl: "batting line-up placement"

                                                    title: "name of field"
                                                    description: "time and date"
                                                    imgUrl: "Ballfield Image"

    In context I will implement useState to grab the data from the get requests response and set it equal to a global state where I can use hooks throughout by passing in my context to different pages.  This in turn will allow the MVP data to be rendered.







