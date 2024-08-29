# ABOUT 

## THE THREE GOALS OF STARLANE FRAMEWORK

1. Simplify the wiring and orchestrating of the discreet feature components of an application. 
2. Bring the Micro Service Archetectue pattern to the frontend and ease the development hastles associated with micro service archetecture on the backend.
3. make feature component addition, extension and overwriting of deployed applications easier and more secure. 

3rd party feature component extensions by making it easier to accept secure 3rd party contributions at the component level.


## WHAT IS AN APPLICATION?
Before detailed explanation we need to establish the meaning of terms
in the parlance of the Starlane Framework. And here we ask ourselves 
"What is an application?"  And the answer can vary depending upon
who are why that is asked.  

An application could be a process that runs on your PC or an entire enterpise software solution sprawling accross millions of devices, processes, databases, servers, clients.

In nutshell a Starlane application is simply an organized collection of loosely coupled **FEATURE COMPONENTS** and the invisible **PLUMBING** that connects an orchestrates those components.  In fact the name "Star Lane" was chosen because it conjures imagry of objects (feature components) and a tunneling structure that connects those objects. Imagine the various feature components represented by a ***Star*** and a tunnels where those Stars share information as the ***Lanes*** So... *StarLane!*

## STARLANE & WebAssembly (Wasm)
Starlane has two major concerns: o

1. Host the feature component's virtual machine which accept WebAssembly (Wasm) binaries.  The WebAssembly components are considered the "Business Logic" of the software solutions or in other words the special sauce that supplies a unique value to the users.
2. Orchestrate said WebAssembly components and facilitate the application "plumbing" with minimal hastle to the feature components. In other words Starlane should do as much as posible reduce a the development efforts toward facilitating infrastructure which is neccessary but does not provide unique value to the users.

With the initial intruductions out of the way lets dive in a little deeper!
 
 ## THE 3 MAIN GOALS OF THE STARLANE FRAMEWORK

1. **FOCUS DEVELOPMENT ON VALUE ADDED FEATURES**
   *Provide a common and simple "plumbing" infrastructure so that developers can focus on the business logic that brings value to their users.*

   Classical Application development effort is composed of 40% value added feature enhancement and 60% infrastructure tax (meaning the infrastructure to connect, queue, filter, transform store, etcetra in order to facilitate the valued feature component. 
all
   Traditional applications tightly coupled these cross cutting concerns--typically at the linked library level. But what is the advantage to 


   In Starlane developers compile their business logic to one of a variety of WebAssembly patterns. The most basict WebAssembly commonent merely takes an input via stdin and outputs to stdout or stderr. It doesn't even require any custom support libraries.

   WebAssembly guest feature components can incorporate some common host APIs to their infrastructure capabilities which may include: Accessing the component registry, sending messages in a standard way (for the components there is only one message library needed, Starlane painlessly convert messages to Kafka, RabbitMQ, etc... feature component hosts also except custom WebAssembly Interface Types which allow components to invoke methods on other local components or seemlessly invoke via Remote Procedure Call.
   
   WebAssembly?  Because its polyglot, secure and deterministic.  

   Polyglot because almost every modern programming language can be compiled to WebAssembly. Even though Starlane is written in Rust, Developers using Starlane don't need to know anything about Rust.  

   Secure because WebAssembly executes in a Virtual Machine and can only call host methods that have been whitelisted--This is a very importat innovation!  Java also runs in a virtual machine, however, its security model approach is is configured via blacklisting specific method calls. In other words there is a 'security auditor' within Java that is checking if the VM has the permissions to invoke dangerous system calls on the host environment meaning that if the the developer neglected to blacklist a particular dangerous system call the Java VM will allow it.  Unfortunately these unwanted system interactions can happen within 3rd party libraries that the developer is unaware of!  One of the most egregious security breaches of all time occurred a few years ago in a trivial but ubiquitous logging library which allowed hostile entities to get administrator access to the host servers! 

   The danger of the blacklisting approach is that it will only ever be secure if the developer anticipates every potential security vulnerability that might happen. I was a java programmer for 25 years and I never once saw a developer actually use the blacklist.  Developers are rightfully focused on the value adding unique feature code.  It is a widely accepted practice to simply 'trust' all the libraries that compose a software product even though there is no way a developer could possibly be assured that there wasn't a malicious or negligent actor included somewhere in the backalley libraries of the code. The whitelist approach adopted by the WebAssembly model forces the developers to be *intensional* in order to implement requirements he must ammend the whitelist--hopefully with nothing more than the minimally required permissions.  
   Finally WebAssembly is deterministic. That means that given the same inputs and code the computational outcome will produce identical results regardless of underlying hardware.  This is important for cluster computing in heterogeneous environments. Determinism is one of the underpinning necessities for reliability.

 2. ***FINE GRAINED MICRO SERVICES (FEATURE COMPONENTS!)*** 
    The second goal of Starlane is to bring the micro service architecture pattern to the process level AND make enable backend micro services to become even more fine grained.  

    And why would we do that? First lets consider the killer benefit that the now ubiquitus back end micro service pattern provides:  ability to isolate features of an "application" so they can be enhanced, scaled and rewritten in isolation from the rest of the application thereby in most cases not disrupting unrelated features are already working with the present infrastructure.

    Presently this code isolation is typically accomplished via separate processes, virtual machines, servers and/or containers with only the added tax of writing some infrastructure code to interact over the network. 

    The micro service pattern imporoved over the traditional monolithic application--which is to say an architecture where nearly ALL of the backend features are contained in one service/process. Often the monolithic pattern encounters unavoidable growing pains when shared third party library upgrades are compelled by one feature to the potential detriment of multiple other features. For example: a user profile feature which uses a rest client library to communicate with a social media platform may require a version bump which in turn disrupts an unrelated credit card processing feature causing catastrophic failures requiring unwanted refactoring on a feature that was at the time working nominally.  Forced refactoring of that nature is a chore that is antithetical to any software company's mission of adding value to the user experience ... it is merely an unwanted effort to guard against a potential regression.

   But why is making micro services more fine grained valuable? The most common implementation of the micro service patten is facilitated by containers which often packages a tiny solution with an entire operating system. So there is a lot of resource and development effort baggage in terms of adding a new microservice which tends to favor making a particular "micro" service larger which tends to promote micro services that may share multiple bundled features.  But WebAssembly does not include an operating system... its just code.  And in fact Starlane nodes actually run inside of a container and yet the starlane application may be hosting hundreds of differnt WebAssembly feature components.  Finer grained isolation means features can be abstracted and decoupled even more which will benfit development and some additional advantages to be extoled in Goal 3!

   And there's more goodness! Since micro service architectures are decoupled by nature the enterprise can be a heterogeneous polyglot of different languages at the feature level.  This may seem counterintuitive to create a solution with different languages but there is method to this madness especially when one considers that different languages often accel at different things.  For example: Java is a great language for a web server but when it comes to data analysis Python has many more libraries and conveniences for developers.  Decoupling the web server from the analytics engine enables each developer to choose the best language for the needs of the valued user feature.
 

  Finally Starlane makes it easier than ever to implement the micro service pattern on the client. Since most isolation mechanisms in vogue today are at the operating system level i.e. containers... nd since clients are usually frontend web pages or stand alone processes the micro service pattern is rarely even considered on the client side.


  But the standard monolithic approach to client architecture is rife for disruption with the introduction of WebAssembly which again can be executed with reasonable secuirty and can be deployed in small bits without an operating system (the smalest WebAssembly component I have created to date was 500 bytes!)  Client componets are in most cases no different than server side components... as a matter of fact one of Starlane's important jobs is to greatly reduce the pain of client/server communication making it almost as easy as calling a local library. 

                
3. ***FACILITATE SECURE 3rd PARTY CONTRIBUTIONS IN MULTIPLE WAYS***

   Because Starlane encourages feature level isolation with an API infrastructure than is constrained by configuration individual feature components can be extended or overriten by third parties if allowed by the application developer. The advantages to this 3rd goal is broken down into 3 sub benfits:

    1. ***THIRD PARTY EXTENSION***  
       Third party extensibility in a platform increases its valuable ***exponentially***! The utility of offering extensibility to your users is apparent: Why limit your platform's creativity to the imagination of you and your team?  Instead enable ANY developer in the world to make contributions to improve your offering in ways you never would have imagined. The hottest indicators of this phenominom are the proliferation of App Stores.  Apple, Facebook and Shopify have highly successful app stores. What is an App but an means to extend the utility of a platform?  People don't buy iPhones because they want to use the limited applications that are bundled with the operating system.  The iPhone is a hot commodity because a massive pool of developers are able to delight a vast ocean of customers that want to enjoy iPhone experience in billions of ways not ever imagined by the Apple developers that created the platform! 

       Enabling extensibility in an application has traditionally been a herculean effort out of reach for all but the largest of enterprises but Starlane aims to ease this pain for the everyman. Since all Starlane application are loosely coupled components a developer can permit via configuration the users to add completely new components and applications to extend your platform in ways you haven't yet imagined!  


    2. **SECURE EXTENSABLE COMPONENTS FROM CLIENT TO SERVER***

       The present solutions for extending backend pplications has a high barrier of entry for developersdue to the reasonbale security precausions enacted by platforms. For example: developers who have a great app idea for Shopify or Facebook face a significant barrier of entry before they even start writing code because cloud apps require a completely separate infrastructure.  What that means is that the developer has to provision, archetect and adminstrate a backend technology stack before he can begin to create the value added code that is his unique offering to the user.  The App model for Shopify and Facebook is a little bit of a parlour trick presented to the end user by giving illusion of something that exists within the mother platform but in reality these apps are granted a limited enumeraton of priviledges and permissions to allow platform API calls at the behest of the user

       The cloud app separation is prudent given the platfoms concern of hostile agents deploying malicious applications that if allowed to run in within Shopify or Facebook infrastructure might create problems. But here is where WebAssembly changes this game.  Because of the way WebAssembly works (in particular as a guest virtual machine that can only interface whitelisted host methods) Because of WebAssemblies inheriently more secure archetectural approach a platform may run untrusted third party code with a reasonable expectation that it cannot do harm.

       Please note that team members of project Starlane are careful not to indulge in arrogance and complacency when it comes to security.  WebAssembly is inherently more of a secure technological approach due to how it is implemented from the ground up and I am unware of any way to maliciously compromise a properly configured WebAssembly host, but the more software is allowed to do the less secure it is... And we do not pretend that we can anticipate every possible attack vector.  Therefore we like to say that WebAssembly provides a ***reasonable*** expectation of a security when administered by diligent and dedicated IT professionals.

   Shopify has been experimenting with WebAssembly (although not Starlane in particular, unfortunately! If you work for Shopify PLEASE email me: scott@uberscott.com! I'll give you the delux tour of this tech!)  I don't have the inside track on Shopify's goals but my guess is that Shopify also sees the potential in WebAssembly to demolish the infrastructure obstacle that stiffles developers before they can write a single line of value adding code.


3. ***OVERRIDING OF FEATURE COMPONENTS BY 3rd PARTIES***
  
   Goal 3.3 may seem similar to goal 3.1... yet it is actually something quite different and as far as I know potentially a unique offering from Starlane. We have already covered extension of a feature component but Starlane also facilitates allowing 3rd parties to override a feature component.  And this innovartion is best described by example:

   1. ***A Custom Profile Page***...  o
     But first: Story Time.... Many years ago a social media site for rock bands called MySpace.com achieved viral adoption because users were able to greatly customize their outfacing profile page.  The ironic thing was that style customization was not permitted intensionally.  I looked at the front end code myself.  Some hackers discovered that a stowed away css style sheet on certain posts would override the common style from MySpace.  An explosion of 3rd party websites appeared overnight written by hackers which made it exceedly simple for any person--even a non technical person--to customize the style of their profile page.  The exploit of course only effected a web pages style so it was harmless enough.  But what a crazy development at time in the ancient days of the internet when 3rd party apps and customization didn't exist!  In my opinion visionaries like Mark Zuckerberg and Steve Jobs recognize the exponential impact that 3rd party contribution could bring to any platform.

   Well, lets pretend we are making a modern MySpace.com clone some 20 years since that company lost all its market share.  And we are implementing in it Starlane of course.  We could create one feature component called "UserProfile" and decorate it with configurations that allows it to be overwritten and thusly a 3rd party could make a completely new type of stylized profile available for the platform to securely override the defafault UserProfile implementation.
j
   Of course its neat to change the style of the UserProfile, but that isn't really revolutionary.  Let's instead imagine a 3rd party developer submits a feature component that overrides the UserProfile's behavior.  He has added a countdown widget that shows how many seconds to the your band's next gig... he created a user presense indicator so people can see who esle is looking at the profile in real time and he has made it so that all users looking at your profile page can chat with eachother.  The magic isn't in any example I have supplied. I'm just an individual with a limited imagination.  The magic is that an application was rolled out by one entity and at some subsequent time wholly unanticipated things come to life in the platform you are creating!  Maybe most of them aren't so good.  But SOME innovations change the world in unexpected ways.
   
   
 2. ***A GAME CLIENT***
   Again: Story time... ages ago I created a multiplayer 2d space shooter game that featured significant ship customization to the players.  One unrealized objective of that project was to enable players to write custom AI bots and mod some aspects of the game... etc.  Typically in games then and now a nifty scripting language called Lua is the goto for modding a games and AI bots.  Lua has a great security model based on whitelisted host calls which makes gives it reasonable security, however, it is an interpreted language which means it runs too slow for some performance intensitve requirements.  Lua is also not a very good language in my personal opinion.  I hope I haven't offended any dedicated Lua developers by saying that... I still think you guys are SUPER COOL!  But the broader point I am making is that there is not many options available to game developers who want to enable players to mod the game.  Its been pretty much Lua or bust. Modding via WebAssembly is Lua's equal in terms of security model, it is not interpreted but compiled to a special machine code so it is performant and it allows contribution in almost all popular languages. Who knows someone may create a Lua to WebAssembly compiler and life will go on for the dedicated modders everywhere.

  The innovation that Starlane brings by virtue of WebAssembly is tightly compiled, performant and secure executable overrides on the gaming client AND server.


3. ***CUSTOM BILLING***
   Guess what?  It's story time again!  My father and brother run the family business (i'm not allowed on the premisis anymore... really who WOULD trust a Rust developer even one that is family?)  They run a complicated business to business (B2B) supply chain operation that serves about 100 customers.  Unfortunately, pretty much each business has differing requirements and procedures when it comes to billing largly in terms of the papertrail and analytics they need to process the presented bill.  And remember people and companies don't really like to be billed for using a service or product that they have already consumed so they are prone to be grumpy if they are asked to give money and presented with a headache at the same time.

The programmers at Dad's company are a smart bunch (when I was allowed to visit they would feed me lunch)  And these smart people have implemented a rules based system that tailor the experience for each customer. Additionaly the Accounts Billable staff are very mindfull and dedicated so the outcomes are largely good. So I wouldn't propose that they refactor what was working... but I like to imagine what utility Starlane would bring to this equation especially if they had to change their business model to business to consumer.

  And for the sake of the thought experience I am going to extole three common customization properties that I conjured from my own unworthy mind:
 1. A Notification feature.  This can be any means of notifying a customer that a bill is ready for review, Email, SMS Text, prompting a specific employee to courtesy call the customer, smoke signals, carrier pidgen. Every customer has a unique ask for how to be notified which means the notification feature is custom coded for eavery customer.

 2.Automatically Generated Analytics Reports (also generated to satisfied unique asks from every customers.)

 3. Late Penalty Rules and Enforcement.  The Rules and penalties in this company are seprately negotiated for each contract again necesitationg high levels of developers attention per account.

 In the B2B setting a rules engine consisting of 100 conditions works very well.  Since the nature of
the B2B model is a ***limited*** number of ***high value*** customers, the marginal value of each account justifies great a investment of developer resources typically to the point that every last whim of the customer billing experience will be satisfied.  

But imagine if the family business were to hypotheticaly adopt a B2C business model. The software investment and approach would necesarly be very different. In the hypothetical B2C world the engineering team would have to satisfy a ***large number*** of customers that are mostly ***low value***.  Allocation of developer resources for the masses are justifyable quite finite.  The typical sollution track for a B2C problem of this nature would employ a small enumerated list of plans, and letting each customer opt for the plan which is closest to their billing wants but not likely to be exactly what they want.  

Please take a gravity filled pause to properly appreciate the fact that every B2C company in the world is essentially a continuously improving plan refinement engine in order to create a solution that meets the largest residual cohort free customers who feel like their current needs are not being satisfied.

Plan fitting is really a concept that exists outside of software.  Entire small and medium business fiefdoms thrive by appealing to the needs of customers whose wants reside in the vast shadowy gaps cast by the limited offerings of the largest players.  McDonalds only fries it's burgers which means customers who favor broiled hamburgers flock to Burger King.  Hertz rental car is the best if you know what your doing but Avis promises to try harder for you.  Budweiser is the king of American bear but many have taste for all varieties of mom and pop micro breweries.  The pattern of tailoring experieces to meet the largest number of still yet unsatified customers goes on and on and on...

What I am establishihg is that in B2C the one size fits all approach is an economic necessity and yet its regig contraints often alienate large customer populations. 

How I want to introduce how I think a software solution based on Starlane would make my conceptualized B2C incarnation of the family business snag a larger marketshare of customers.  Instead of a rules based engine the same limited enumeration of plans created by the development team only this time these plans are various compositions of feature components that result in every customer getting billed in the way they expect according to the plan they selected.  So far nothing is really different.  But the team could do something really smart and allow customers to override each feature component of their billing process. 

In the Starlane imagining a tech savy customer could write a custome notification feature for his billing billing notification: (

So the billing archetecture was carefully crafted as a collection of feature components which are deployed in different a




  



   




                   
