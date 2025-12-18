# Context

#### _[January 2nd 2174]_

You know the history books, but they are mostly blank pages. The world we are trying to study, _Earth_, was fine until the **Global Conflict of 2080** happened. That massive war totally destroyed the planet, made it completely unviable, and forced all surviving civilization to pack up and leave in huge spacecraft vessels. Nothing from this ancient, moderned and highly developed civilization, called Humans, survived the disaster.

So now, here we are in 2174, and we still have a big hole in our understanding of what actually led up to that collapse, and more generally of the life of this civilization in Earth almost 100 years ago. That's where you come in.

As an **Intern in Earth History**, you have been designated to participate to the huge project to reconstruct Earth’s past. Your specific mission is to **reconstruct the history of the volatile 2014–2017 era**. You need to figure out how that advanced society broke down.

The main **Research Questions** you need to tackle are the following:
1. Can world events in times of crisis be reflected in the sentiment evolution of subreddits interactions?
2. Can world events affect the dynamics of subreddits interactions?


### The Archive: The Single Surviving Fragment

The unique and most important artifact we recovered from the crash is the [**Reddit Hyperlink Network**](https://snap.stanford.edu/data/soc-RedditHyperlinks.html). Think of it: millions of digital interactions preserved! It's the single surviving fragment of human communication from those critical years. Everything else is lost.

**The Problem**: When you open the file, it’s a chaotic mess. It looks like an ancient, dead language. Why? Because the original text of the posts is too corrupted to recover. 

It just tracks connections between thousands of subreddits which represent their digital communities. You're probably thinking the same thing: _If the text is corrupted, how can we tell what happened in those years?_

But don't let the language barrier scare you off. The core emotions-the anger, the sadness, the joy-are universal. Your entire mission is based on analyzing the **network's relationships** and the **emotional scores** as they are the only tool we have left to understand what happened.

### Deciphering the Code

You are now looking at the archive. Your first task in this mission is to figure out if this data is even usable. 

You don't need a text translator. You just need to focus on two things: the relationships (who linked to whom) and the emotion (±1 score). But first, you need to verify if those surviving emotional scores are actually reliable indicators of real human feelings. Can we prove that certain types of languages led to certain types of links?

You need to use the surviving **Linguistic Artifacts** (the LIWC scores) to see exactly which words were driving the ±1 sentiment score.






{% include sub1.html %}

_Post properties associated with negative (red) vs positive (green) sentiment_
{% include Test10.html %}



That chart right there is our proof! It shows exactly which language drives the digital interactions:
* The red bars (positive correlation) confirm that features like LIWC_Anger and VADER Negative sentiment are strongly linked to conflict links (LINK_SENTIMENT=−1).
* The green bars (negative correlation) confirm that positive features like LIWC_Posemo and VADER Positive sentiment are strongly linked to friendly links (LINK_SENTIMENT=+1).

This confirms that the data is viable for reconstructing the history of the 2014–2017 era to understand what happened to Earth.



 Now let's move on to the history timeline.

## Bottom-up approach

Mission goal: ...

Okay, the decoding worked. Now that your emotional indicators are validated, let's look at the big picture. The hard part start : putting it all on a timeline. You have millions of data points, so your first task is to calculate the Normalized Conflict Fraction every single month for the entire archive, so from 2014 to 2017. Why normalize it? Because you don't want just to know how many hostile links happened, you want to know the intensity, so what percentage of _all_ interactions are hostile. This filters out the general background noise and shows us the real emotional tension.

_GRAPH: Interactive Plot with Bin Size Selection: Overall Monthly Normalized Conflict Fraction_

You can try changing the bin size: day, week, month. But look at the monthly view: it's a mess! The line is jumping all over the place. It's almost impossible to figure out what caused the ups and downs. If you just leave it like this, you can't tell the history. It's **Game Over** if you can't organize this chaos. You have to refine your analysis! You can't analyze 55,000 subreddits one by one. That's why you have to get smart. 

##### What kind of approach do you want to take to refine the analysis?

_BUTTON: Clustering OR Option2 OR Option3

You got the correct approach! You correctly realized you need to find the clusters groups of subreddits that talked about the same topics. You can use the embedding vectors (the digital DNA) of the subreddits and ran the DBSCAN approach to define these clusters based on topics. But don't forget to ignore the random outlier subreddits that don't belong anywhere.

<iframe src='https://flo.uri.sh/visualisation/26536290/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/26536290/?utm_source=embed&utm_campaign=visualisation/26536290' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

This map finally shows us the different topic groups: the Politics Cluster, the Gaming Cluster, the Neutral News Cluster, and so on. This proves the chaos is organized. 

## Top-down approach 

Mission Goal: Indentify specific known world events from the data ...

Now, we switch our approach. Instead of looking at the whole archive first, we use the little bit of corrupted external data we have to target specific event dates. We can choose between two major kinds of shocks to see if the network behavior matches:
* Anticipation of Political Shock: Look for slow builds (like elections) where the tension might have peaked before the event
* Acute Shocks: Look for sudden events (like attacks) where you should see an immediate and rapid response

_INTERACTIVE ELEMENT: SELECT AN EVENT_

You can now select any event from the archive to test the system ...