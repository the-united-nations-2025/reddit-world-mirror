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

You are now looking at the archive. Before starting the big analysis, you first need to figure out if this data is even usable. 

You don't need a text translator. You just need to focus on two things: the relationships (who linked to whom) and the emotion (±1 score). But first, you need to verify if those surviving emotional scores are actually reliable indicators of real human feelings. Can we prove that certain types of languages led to certain types of links or certain types of attacks?

You need to use the surviving **Linguistic Artifacts** (the LIWC scores) to see exactly which words were driving the ±1 sentiment score.

_Post properties associated with negative (red) vs positive (green) sentiment_
{% include Test10.html %}

That chart right there is our proof! It shows exactly which language drives the digital interactions:
* The red bars (positive correlation) confirm that features like LIWC_Anger and VADER Negative sentiment are strongly linked to conflict links (LINK_SENTIMENT=−1).
* The green bars (negative correlation) confirm that positive features like LIWC_Posemo and VADER Positive sentiment are strongly linked to friendly links (LINK_SENTIMENT=+1).

This confirms that the data is viable for reconstructing the history of the 2014–2017 era as we can actually "read" the emotion of a dead civilization.

Now that we know _what_ language drove the sentiment, we need to know _who_ the main players were. If we want to understand the chaos of 2014–2017, we cannot treat the entire network the same way. We need to identify the "hotspots": the communities that were most likely to start a digital fight, and the ones that were constantly getting attacked. 

We track every single negative link (LINK_SENTIMENT = -1) to find the source and the target. To do this, we split the conflict into two sides: the Instigators (the ones starting the fights) and the Targets (the ones getting called out). Check out what the data showed us:

{% include subreddits_receiving_starting.html %}

###### The Instigators (The Attackers)

First, we tracked which communities were the most aggressive. We looked at the "Source" of every negative link to see who was reaching out to start trouble. This is the Red List. These are the top subreddits that initiated the most conflict links. Weirdly enough, you will see names like r/subredditdrama right at the top. It makes sense as their whole purpose was to find and talk about fights happening elsewhere. By looking at this, we can identify which "tribes" were the most active in pushing the network toward a breaking point.

###### The Targets (The Victims)

But a fight has two sides. We also had to look at the "Targets", so the communities that were constantly being linked to in a negative way. This is the Blue List. These are the communities that were most frequently targeted by others. Some of these are huge, like r/askreddit, which just gets a lot of links because it’s so big. But others are much more specific. You can see communities that were clearly "villains" in the eyes of the rest of the network, getting hammered with negative links from all over the place.

To make it even clearer, we summarized the data to see the "Net Aggression." We wanted to know: is a community a pure attacker, a universal target, or can it do both ?

{% include negative_hyperlinks_source.html %}

This summary shows us that conflict wasn't just random noise: it was driven by specific cnetral nodes. Why this matters for your mission: Identifying these central nodes tells us who held the power and who caused the friction. If we’re going to understand how this society broke down, we have to follow the people who were starting the most fires.

Mission Status: We now have our tools and we know who the players are. Now, we can finally zoom out and look at the whole timeline to see if we can spot the moment Earth started to trend toward chaos. Let's start the Bottom-Up analysis by looking at the timeline.

## Bottom-up approach

Now that we have finished the tools and identified the main players, let's look at the big picture. The hard part start : putting it all on a timeline. You have millions of data points, so your first task is to calculate the Normalized Conflict Fraction every single month for the entire archive, so from 2014 to 2017 to see if we could spot the moment everything started to slide toward the Great Collapse.

{% include proportion_negative_over_time.html %}

**The Verdict: It’s a Mess.**
Look at that graph. If you were hoping for a clean, straight line that tells a simple story, forget it. You can try changing the bin size: day, week, month. But look at the monthly view: it's a mess! The line is jumping all over the place. It's almost impossible to figure out what caused the ups and downs. At this scale, everything is blurred together. A massive political revolution looks the same as a little server crash.

You have to refine your analysis. You can't analyze 55,000 subreddits one by one. A solution is to use **clustering**.

#### Clustering
You want to find clusters groups of subreddits that talked about the same topics. You can use the embedding vectors (the digital DNA) of the subreddits and ran the DBSCAN approach to define these clusters based on topics.

<iframe src='https://flo.uri.sh/visualisation/26536290/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/26536290/?utm_source=embed&utm_campaign=visualisation/26536290' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

This map  shows us the different topic groups: the Politics Cluster, the Gaming Cluster, the Neutral News Cluster, and so on. This proves the chaos is organized. 


Looking at individual subreddit is not that significant and it's quite difficult to interpret, as we could observe in the preliminary analysis.

What should we do now ?

Maybe we should try another approach. What if we looked at the evolution of subreddits that have the same thematic ? Maybe for example, by looking at all the groups about politics, we can observe out of normal behaviours.

But the majority of subreddits aren't very active, with very few posts in the span of 3 years. Taking all the subreddits might give us noisy results. We decided to arbitrarily choose the subreddits with a total post counts of at least 100 posts.

How are we going to group similar subreddits ? From the last remaining piece of information from earth great collapse, we found ancient representations of the said subreddit that they called embeddings. Maybe we can use that to our advantage: what if two similar subreddit had similar embeddings ?

Using a technique called clustering, we can group vectors by how close they are to each other. K-Means is an unsupervised machine learning algorithm used to group data into K clusters based on similarity.

How it works:

1. Choose the number of clusters (K).
2. Initialize (K) centroids (cluster centers).
3. Assign each data point to the nearest centroid (usually using Euclidean distance).
4. Update each centroid as the mean of the points assigned to it.
5. Repeat steps 3–4 until assignments no longer change or convergence is reached.

Firstly, to find the optimal number of cluster (i.e the optimal number of different topics), we are going to use the **Elbow Method**.

The **Elbow Method** is a heuristic used to choose the optimal number of clusters (K) in clustering algorithms such as K-Means.

How it works:

1. Run the clustering algorithm for different values of (K).
2. Compute the within-cluster sum of squares (WCSS) for each (K).
3. Plot WCSS versus (K).
4. Identify the “elbow” point where the decrease in WCSS starts to level off.

**Key idea**:

The elbow represents a good trade-off between model complexity (number of clusters) and clustering quality.

{% include k_selection_elbow_silhouette.html.html %}

We find an optimal k of 4. This seems a bit low and not specific enough, we might have too broad cluster subjects. The second best option seems to be a better alternative. We would likely choose 13 clusters.

Secondly, we will apply a method known as the **DB Scan** to remove the outliers that are far away from others subreddits (i.e maybe too unique).

**DBSCAN** is an unsupervised clustering algorithm that groups data based on **point density**, rather than distance to a centroid.

How it works:

1. Define two parameters:
* (eps): neighborhood radius
* **MinPts**: minimum number of points to form a dense region
2. Points with at least **MinPts** neighbors within ( \varepsilon ) are **core points**.
3. Core points and their neighbors form clusters.
4. Points not reachable from any core point are labeled as **noise**.

...


#### T-SNE/PCA Plotting of clusters

Let's visually confirm that similar subreddits sit close to each other in the embedding space. But right now we have multidimensional vectors that are nos suited for plotting in 2d or 3d. We are going to use the **T-SNE and PCA dimension reduction method**.

<details>
  <summary><b>Click here to see technical details about the DBSCAN settings</b></summary>
  <p>
    We used an epsilon value of 0.5 and a minimum of 10 samples. We found that this 
    was the best way to get rid of the "noise" subreddits while keeping the 
    main clusters like Politics and Gaming intact.
  </p>
</details>

{% include pca_plot.html.html %}

{% include significant_increases_plot.html.html %}

{% include t_sne_plot.html.html %}

{% include top_negative_subreddits.html.html %}


So, we now have tools to find meaningful timespan where conflicts emmerged during the **Great collapse**. We can now link this to the archives on the mothership, where we could find historical events to compare...

## Top-down approach 

Mission Goal: Indentify specific known world events from the data ...

Now, we switch our approach. Instead of looking at the whole archive first, we use the little bit of corrupted external data we have to target specific event dates. We can choose between two major kinds of shocks to see if the network behavior matches:
* Anticipation of Political Shock: Look for slow builds (like elections) where the tension might have peaked before the event
* Acute Shocks: Look for sudden events (like attacks) where you should see an immediate and rapid response

_INTERACTIVE ELEMENT: SELECT AN EVENT_

You can now select any event from the archive to test the system ...

{% include Gaming_neg.html %}


## A Top-Down Reconstruction

Through generational knowledge, cross-archive comparison, and our earlier bottom-up analysis, we are already aware that several major world events took place on Earth during the years covered by our dataset. These events are repeatedly referenced in surviving historical records, and their approximate dates are well established.

At this stage, we shift perspective. Instead of asking:

> *“What events might be hidden in the data?”*

we now ask:

> *“What does the data look like when we focus directly on a known global event?”*

This marks the transition to a **top-down approach**.

We center our analysis on four major events:

- **Ebola outbreak (2014)**
- **Paris terrorist attacks (2015)**
- **Brexit referendum (2016)**
- **United States presidential election (late 2016)**

---

### Analysis 1 —  Which subreddits increase their activity the most around a major world event?

To address this question, we measure the activity of each **source subreddit** before and after the event, using the **number of outgoing hyperlinks** as a proxy for participation and engagement.

An increase in activity suggests that a community becomes more involved in cross-subreddit discussions during that period.  
Our objective is to determine whether the most active communities are **related to the event itself**.


#### USA Election
{% include us_election_neg_activity_animation.html %}

#### Brexit Referendum
{% include brexit_neg_activity_animation.html %}

#### Paris terrorist attack
{% include paris_neg_activity_animation.html %}

#### Ebola outbreak
{% include ebola_neg_activity_animation.html %}


---

### Analysis 2 — Which Communities Interact the Most?

Increased activity alone does not tell the full story.

Communities do not act in isolation, they actually **reference, argue, or support one another**.
For this reason, we extend the analysis to pairs of subreddits

We identify subreddit pairs with the **largest hyperlink activity** during the event time window.  
These pairs represent communities that interact frequently and consistently, suggesting ongoing dialogue, or conflict, between them.  
By examining these recurring interactions, we can detect **polarized community pairs** or **event-driven alliances**.


#### USA Election
{% include us_election_pairs.html %}

#### Brexit Referendum
{% include brexit_topic_pairs.html %}

#### Paris terrorist attack
{% include paris_topic_pairs.html %}

#### Ebola outbreak
{% include ebola_topic_pairs.html %}

---

#### **Introducing Event-Specific Knowledge**

At this point, our previous work becomes essential.

Thanks to earlier **bottom-up exploration**, historical records, and intergenerational knowledge, we already possess a rough understanding of the themes surrounding each event.
From this, we have extracted event-related keywords. This allows us to refine our focus.

---

### Analysis 3 — Activity Through the Lens of Event Keywords

In this third analysis, we revisit the question of subreddit  increased activity but we now filter subreddits by **event-related keywords**, selecting only those whose names are explicitly linked to the event.

This step helps us separate **event-driven activity** from background noise, strengthening the link between observed behavioral changes and the real-world event. Nevertheless, we also lose potential subreddits involved that have a name not related with the event occurred.



#### USA Election
{% include us_election_keyword_filtered.html %}

#### Brexit Referendum
{% include brexit_keyword_filtered.html %}

#### Paris terrorist attack
{% include paris_keyword_filtered.html %}

#### Ebola outbreak
{% include ebola_keyword_filtered.html %}


---

### Analysis 4 — Event-Focused Interactions Between Communities

Finally, we combine both ideas: **interaction** and **contextual filtering**.

In this analysis, we examine pairs of subreddits that both relate to the event through keywords and show increased hyperlink activity during the event window.  
This may reveal **coordinated discussion hubs** and **communities shaping dominant narratives.**


#### USA Election
{% include us_election_keyword_topic_pairs.html %}

#### Brexit Referendum
{% include brexit_keyword_topic_pairs.html %}

#### Paris terrorist attack
{% include paris_keyword_topic_pairs.html %}

#### Ebola outbreak
{% include ebola_keyword_topic_pairs.html %}


