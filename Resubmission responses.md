### 12 March 2025 feedback - responses and/or rebuttals

### The Technical Team had the following comments:

> Readme is clear but sparse. What is the project, how did you make it, what tech did you use? Installation instructions would benefit from formatting.

I have added more information to the README

> As on a refresh the saved items persist without a backend, that means you’re using local storage but at no point have informed the user that you’re accessing their browser. I strongly recommend making the user aware of that in both the readme and on the website itself.

This has been added to the README and the new Landing Page.

> Upon opening the application I have no information about what this is or what it’s for. I love that there is a default search of artwork on display. But with no real landing page how do you welcome visitors and show how to use the site.

I have added a landing page that gives details on how to use the site.

> Lighthouse score of 91 is good, room for improvement on your colour contrast.

Nothing changed here.

> If I add items to an exhibition the navigation changes to what looks like an information box, when I click the X to close it off the whole exhibition is removed. MVP states that I should be able to make several exhibitions of different artworks, this looks like I can only make one.

You can now create, edit and share multiple exhibitions. A list is exposed via the Landing Page.

> Site appears responsive on small screens.

Nothing changed here.

> Pagination is ok, but on a refresh I’m taken back to page one. Consider utilising the url to avoid this.

The page, sort, gallery and search term have been added to the query string.

> Unclear if your search function is working properly, when looking at the Denmark api and search for cats, I get anatomical drawings of people. Not exactly related to the search term.

Search is controlled by each Museum's API. I do not have any control over how their search works.

> Filtering is limited, there are 9000 pages of results and I can only swap between the date order or popular items. What makes an artwork popular? How are you filtering by this metric?

Popular is the default sort provided by each of the Museum's APIs, it is effectively their most popular or promoted artworks. I have not added filtering as you can search instead.

> There is no error page for a missing route/url.

This has been added.

> This entire application is running on one url with a heck of a lot of state. Consider the guidelines of front end projects you would have already done, if I want to share a link with a friend to see something right now that just isn’t an option.

There are three URLs: the landing page, the exhibition editor page and the exhibition view page all on their own routes.

There is also a stateless (or all the state is in the URL) share exhibition page that can be shared with your friends.

> This is close to a completed project but there are some areas that need attention.

### Resubmission Required:

[x] Users can only have one exhibition.

[x] Search function may not be working as intended.