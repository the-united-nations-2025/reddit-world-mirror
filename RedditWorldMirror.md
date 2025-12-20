# Context

#### _[January 2nd 2174]_

_You know the history books, but they are mostly blank pages. The world we are trying to study, **Earth**, was fine until the **Global Conflict of 2080** happened. That massive war totally destroyed the planet, made it completely unviable, and forced all surviving civilization to pack up and leave in huge spacecraft vessels. Nothing from this ancient, moderned and highly developed civilization, called Humans, survived the disaster._

_So now, here we are in **2174**, and we still have a big hole in our understanding of what actually led up to that collapse, and more generally of the life of this civilization in Earth almost 100 years ago. That's where you come in._

_As an **Intern in Earth History**, you have been designated to participate to the huge project to reconstruct Earth’s past. Your specific mission is to **reconstruct the history of the volatile 2014–2017 era**. You need to figure out how that advanced society broke down._

_The main **Research Questions** you need to tackle are the following:_
1. _Can world events in times of crisis be reflected in the sentiment evolution of subreddits interactions?_
2. _Can world events affect the dynamics of subreddits interactions?_

# Preliminary Analysis

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

Now that you know _what_ language drove the sentiment, you need to know _who_ the main players were. If we want to understand the chaos of 2014–2017, we cannot treat the entire network the same way. We need to identify the "hotspots": the communities that were most likely to start a digital fight, and the ones that were constantly getting attacked. 

You track every single negative link (LINK_SENTIMENT = -1) to find the source and the target. To do this, you split the conflict into two sides: the Instigators (the ones starting the fights) and the Targets (the ones getting called out). Check out what the data showed us:

{% include subreddits_receiving_starting.html %}

###### The Instigators (The Attackers)

First, you tracked which communities were the most aggressive. You looked at the "Source" of every negative link to see who was reaching out to start trouble. This is the Red List. These are the top subreddits that initiated the most conflict links. Weirdly enough, you will see names like r/subredditdrama right at the top. It makes sense as their whole purpose was to find and talk about fights happening elsewhere. By looking at this, we can identify which "tribes" were the most active in pushing the network toward a breaking point.

###### The Targets (The Victims)

But a fight has two sides. You also had to look at the "Targets", so the communities that were constantly being linked to in a negative way. This is the Blue List. These are the communities that were most frequently targeted by others. Some of these are huge, like r/askreddit, which just gets a lot of links because it’s so big. But others are much more specific. You can see communities that were clearly "villains" in the eyes of the rest of the network, getting hammered with negative links from all over the place.

To make it even clearer, you summarized the data to see the "Net Aggression." You wanted to know: is a community a pure attacker, a universal target, or can it do both ?

{% include negative_hyperlinks_source.html %}

This summary shows us that conflict wasn't just random noise: it was driven by specific cnetral nodes. Why this matters for your mission: Identifying these central nodes tells us who held the power and who caused the friction. If we’re going to understand how this society broke down, we have to follow the people who were starting the most fires.

**Mission Status**: You now have your tools and you know who the players are. Now, you can finally zoom out and look at the whole timeline to see if we can spot the moment Earth started to trend toward chaos. Let's start by a Bottom-Up analysis.

# BOTTOM-UP APPROACH

#### 2.0 Overall evolution of hyperlink sentiment

Now that you have finished the tools and identified the main players, let's look at the big picture. The hard part start : putting it all on a timeline. You have millions of data points, so your first task is to calculate the Normalized Conflict Fraction every single month for the entire archive, so from 2014 to 2017 to see if we could spot the moment everything started to slide toward the Great Collapse.

{% include proportion_negative_over_time.html %}

**The Verdict: It’s a Mess.**
Look at that graph. If you were hoping for a clean, straight line that tells a simple story, forget it. You can try changing the bin size: day, week, month. But look at the monthly view: it's a mess! The line is jumping all over the place. It's almost impossible to figure out what caused the ups and downs. At this scale, everything is blurred together. A massive political revolution looks the same as a little server crash.

You have to refine your analysis. You can't analyze 55,000 subreddits one by one. A solution is to use **clustering**.

#### 2.1 Clustering

Looking at individual subreddit is not that significant and it's quite difficult to interpret, as you could observe in the preliminary analysis.

**What should you do now ?**

Maybe you should try another approach. What if you looked at the evolution of subreddits that have the same thematic ? Maybe for example, by looking at all the groups about politics, you can observe out of normal behaviours.

But the majority of subreddits aren't very active, with very few posts in the span of 3 years. Taking all the subreddits might give us noisy results. You decided to arbitrarily choose the subreddits with a total post counts of at least **100 posts**.

How are you going to group similar subreddits ? From the last remaining piece of information from earth great collapse, we found ancient representations of the said subreddit that they called **embeddings**. Maybe you can use that to your advantage: what if two similar subreddit had **similar embeddings** ?

Using a technique called **clustering**, you can group vectors by how close they are to each other. **K-Means** is an unsupervised machine learning algorithm used to group data into K clusters based on similarity.

<details>
<summary><b>How K-Means works</b></summary>
<ol>
<li>Choose the number of clusters (K).</li>
<li>Initialize (K) centroids (cluster centers).</li>
<li>Assign each data point to the nearest centroid (usually using Euclidean distance).</li>
<li>Update each centroid as the mean of the points assigned to it.</li>
<li>Repeat steps 3–4 until assignments no longer change or convergence is reached.</li>
</ol>
</details>

Firstly, to find the optimal number of cluster (i.e the optimal number of different topics), you are going to use the **Elbow Method**.

The **Elbow Method** is a heuristic used to choose the optimal number of clusters (K) in clustering algorithms such as K-Means.

<details>
<summary><b>How the Elbow Method works</b></summary>
<ol>
<li>Run the clustering algorithm for different values of (K).</li>
<li>Compute the within-cluster sum of squares (WCSS) for each (K).</li>
<li>Plot WCSS versus (K).</li>
<li>Identify the “elbow” point where the decrease in WCSS starts to level off.</li>
</ol>
</details>

**Key idea**:

The elbow represents a good trade-off between model complexity (number of clusters) and clustering quality.

{% include k_selection_elbow_silhouette.html.html %}

You find an optimal k of 4. This seems a bit low and not specific enough, you might have too broad cluster subjects. The second best option seems to be a better alternative. You would likely choose 13 clusters.

Secondly, you will apply a method known as the **DB Scan** to remove the outliers that are far away from others subreddits (i.e maybe too unique).

**DBSCAN** is an unsupervised clustering algorithm that groups data based on **point density**, rather than distance to a centroid.

<details>
<summary><b>How DBSCAN works</b></summary>
<ol>
<li>Define two parameters:
<ul>
<li>$\epsilon$ (eps): neighborhood radius</li>
<li><b>MinPts</b>: minimum number of points to form a dense region</li>
</ul>
</li>
<li>Points with at least <b>MinPts</b> neighbors within $\epsilon$ are <b>core points</b>.</li>
<li>Core points and their neighbors form clusters.</li>
<li>Points not reachable from any core point are labeled as <b>noise</b>.</li>
</ol>
</details>

We now have clusters of similar subreddits ! The question is now: What are their themes ? We could do it ourselves but fortunately our spaceship comes with an **LLM** supercomputer than we can run localy. We feed it a prompt asking for reccurent theme of the list of subreddits of each clusters. Then, we do some manual re-labeling to have more meaningfull topic names and regroup potential similar topics. And finally we merge with the counts per reddit to have the full dataframe, used later in the analysis. This process isn't perfect and some manual labeling adjustments had to be made but this basicaly gives us our main topics !

<iframe src='https://flo.uri.sh/visualisation/26536290/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/26536290/?utm_source=embed&utm_campaign=visualisation/26536290' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

The map above shows us the different topic groups: the Politics Cluster, the Gaming Cluster, the Neutral News Cluster, and so on. This proves the chaos is organized. 

#### 2.2 T-SNE/PCA Plotting of clusters

Let's now visually confirm that similar subreddits sit close to each other in the embedding space. But right now you have multidimensional vectors that are nos suited for plotting in 2d or 3d. You are going to use the **T-SNE and PCA dimension reduction method**.

**PCA** is a linear dimensionality reduction technique that projects data onto a lower-dimensional space while **maximizing variance**.

<details>
<summary><b>How PCA works</b></summary>
<ol>
<li>Center the data.</li>
<li>Compute the covariance matrix.</li>
<li>Extract eigenvectors (principal components).</li>
<li>Project data onto the top components with the largest eigenvalues.</li>
</ol>
<b>Key characteristics:</b>
<ol>
<li>Linear method.</li>
<li>Preserves global structure and variance.</li>
<li>Components are orthogonal.</li>
<li>Sensitive to feature scaling.</li>
<li>Interpretable components.</li>
</ol>
</details>

{% include pca_plot.html.html %}

**t-SNE** is a non-linear dimensionality reduction method mainly used for **visualizing high-dimensional data** in 2D or 3D.

<details>
<summary><b>How t-SNE works</b></summary>
<ol>
<li>Convert pairwise distances into probabilities in high-dimensional space.</li>
<li>Do the same in low-dimensional space.</li>
<li>Minimize the difference between the two probability distributions.</li>
</ol>
<b>Key characteristics:</b>
<ol>
<li>Preserves local neighborhood structure.</li>
<li>Reveals clusters clearly in visualizations.</li>
<li>Non-linear and non-parametric.</li>
<li>Computationally expensive.</li>
<li>Not suitable for preserving global distances or for downstream modeling.</li>
</ol>
</details>

{% include t_sne_plot.html.html %}

**Observations**:

* The PCA plot is less representative with no clear visual cluster of nodes.
* On the other hand, the T-SNE plot clearly shows clusters, corresponding to each cluster theme you found. It is important to note that the classification isn't perfect but shows interesting informations still.


#### 2.3 Cluster negative and positive comments evolution analysis
Now that you have your clusters, you can analyze the **trend evolution of negative or positive posts** for a given topic.

This could be useful if you want to identify a **significant event** related to a given topic (for example: a major politic event at time t might lead to a significant increase in the trend of the politic cluster.)

But what is a **significant increase** ?

You followed two methods:
<details>
  <summary><b>1. Rolling Average</b></summary>
  <div style="margin-top: 10px;">
    <p><b>Why?</b> Because the rolling average acts as a smoothed baseline, calculated using a defined window (you can define the wanted window as a parameter), which helps to visually identify deviations from the expected trend. When the post sentiment count falls <b>above</b> the rolling average, it suggests that the post sentiment count has <b>increased</b> relative to its typical trend.</p>
    
    <p>Here, a simple moving average was implemented as followed:</p>
    
    <p>$$\text{RollingAvg}_t = \frac{1}{w} \sum_{i=0}^{w-1} x_{t-i}$$</p>
    
    <p>where:</p>
    <ul>
      <li>$x_t$: count at time $t$</li>
      <li>$w$: window size (number of points in the average)</li>
      <li>$\text{RollingAvg}_t$: average of the current and previous $w-1$ counts</li>
    </ul>
  </div>
</details>

<details>
  <summary><b>2. Poisson distribution</b></summary>
  <div style="margin-top: 10px;">
    <p>Let's assume our negative/positive follows a Poisson law. This is appropriate because:</p>

    </p>* Counts of events are observed in a <b>fixed unit of time, space, or sequence</b>: In your case, positive or negative counts are observed per time step.</p>
    </p>* We assume events occur <b>independently</b>: Each sentiment count at one time step is assumed not to directly affect counts at another time step, at least within the window.</p>
    </p>* We assume the <b>mean</b> equals the <b>variance</b> (or approximately): Poisson assumes that the expected count ($\lambda$) is equal to the variance of counts.</p>
    </p>* Small deviations are acceptable, but large overdispersion may require a Negative Binomial model.</p>
  </div>
</details>

You are going to take the count evolution on a sliding window of a **given duration** (ex: 3 months). In each time window, You will fit the counts to a Poisson Law and look at the increase or decrease.

This method uses a **Generalized Linear Model (GLM) with a Poisson family** to detect **statistically significant increasing trends** in count data over time.

<details>
  <summary><b>3. Poisson GLM Model Formulation</b></summary>
  <div style="margin-top: 10px;">

    1. Model Formulation

    For each sliding time window, the following model is fitted:

    $$y_t \sim \text{Poisson}(\lambda_t)$$
    $$\log(\lambda_t) = \beta_0 + \beta_1 t$$

    where:
    * $y_t$: is the observed count at time $t$
    * $\lambda_t$: is the expected count
    * $t$: is the time index
    * $\beta_1$: represents the **log-rate of change** over time

    The **log link function** ensures that predicted counts remain positive.

    2. Sliding window approach
    The model is fitted on **overlapping time windows** of fixed length. This allows detection of **local increases** rather than a single global trend.

    3. Hypothesis testing
    For each window, the following hypotheses are tested:
    * Null hypothesis: $H_0: \beta_1 \le 0$
    * Alternative hypothesis: $H_1: \beta_1 > 0$

    A window is considered significant if: $p\text{-value} < \alpha$ (the chosen significance threshold).

    4. Interpretation of the trend coefficient
    * $\beta_1 > 0$: exponential increase in expected counts.
    * $e^{\beta_1}$: multiplicative change in the expected count per time unit (e.g., $e^{\beta_1} = 1.05 \rightarrow 5\%$ increase per time unit).

    5. Output
    The method returns all time windows where a **statistically significant increase** in sentiment-related counts is detected, including:
    * Window start and end times
    * Estimated trend coefficient ($\beta_1$)
    * Associated p-value

    6. Limitations of this method
    * Observations are probably not conditionally independent.
    * Mean equals variance is probably not the case (overdispersion).
    * A **Negative Binomial GLM** may be more appropriate, but the data volume is often insufficient to model it reliably. So, as a first approximation, we use a **Poisson GLM**.
  </div>
</details>

A **Negative Binomial GLM** may be more appropriate but the problem is that the data is not sufficient to model it.

So as a first approximation you will use **Poisson GLM**.

{% include significant_increases_plot.html.html %}

**Observations**:

* You can ignore the _first significant time window_ as it is just due to the start of the counts (mismatch between the starting date of the plot and the starting date of the counts).
* The _significant time windows_ seem to follow the time windows where the counts are above the rolling average in a sufficient manner.

**Conclusions**:

* From your observations, you could form the hypotethis that, in the significant time windows, major world events happened at the global political scale, leading to the **potential time windows of the collapse of society** !
* These observations do not give us any informations on the groups involved nor the matter of the event.

#### 2.4 Individual subreddit contribution
Now, you can look at the significant time windows and extract the top active subreddits of the cluster ! This could give you an insight on who's been contributing the most to the negative increase.

{% include top_negative_subreddits.html.html %}

So, you now have tools to find meaningful timespan where conflicts emmerged during the **Great collapse**. You can now link this to the archives on the mothership, where you could find historical events to compare.

# TOP-DOWN APPROACH

The bottom-up approach gave you insights on the events timeline leading to the **Great Collapse**. You now remember that on the _mothership_, there are still ancient archives of **Earth History**.

You decide to go look through them, to maybe find significant events that we might relate to our analysis. After long nights under the dim lights of the archives, and after sacrifying your mental sanity, you manage to find significant events that you would consider as _potential disasters_.

At this stage, you shift perspective. Instead of asking:

> *“What events might be hidden in the data?”*

you now ask:

> *“When I focus directly on a known global event, can I extract topic-linked activities from the data?”*

This marks the transition to a **top-down approach**.

## 1. Activity-based analysis
The events you found out in the archives are mostly politics-related, having this only starting point, you decide to study 4 of major events:


- **Ebola outbreak(2014)**: A major Ebola virus disease outbreak that primarily affected West Africa, with widespread transmission reported throughout 2014.

- **Paris terrorist attacks(2015)**: A series of coordinated terrorist attacks that took place in Paris, France, on November 13, 2015.


- **Brexit referendum(2016)**: A national referendum held in the United Kingdom on June 23, 2016, to decide whether the country should leave the European Union.


- **United States presidential election🇬🇧(late 2016)**: The U.S. presidential election held on November 8, 2016, resulting in the election of Donald Trump.

As you were quite scared to dive into the complexity of Reddit network, your mentor gave you some **mission goals** to give you through this analysis. You will dive step by step into the analysis of **subreddits activity** during some events and look for correlation between the data and the event.

### Analysis 1 —  Which subreddits increase their activity the most around a major world event?
To address this question, you decide measure the activity of each **source subreddit** before and after the event, using the **number of outgoing hyperlinks** as a proxy for participation and engagement.


```
MISSION GOAL:

- Study the subreddit activities over the course of the event.
- Are the most active communities related to the event itself?
```

For each event you decide to plot the **top 15** subreddits that have increased their activity the most in 3 different timespans around the event day (*for example +- 5 days around the US Election day!*).

#### USA Election

{% include us_election_neg_activity_animation.html %}

When focusing on the period surrounding the U.S. presidential election, you observe a clear increase in negative activity in several subreddits. 
* In the shortest time window, subreddits directly related to electoral and political discourse such as *`the_donald`*, *`enoughtrumpspam`*, and *`political_revolution`* rank among those with the largest activity increase.  
* As the time window expands, the composition of subreddits exhibiting increased activity changes but some centered on political topics (and *Donald Trump*) continue to feature prominently!

> This result makes you confident that participation from politically oriented communities becomes particularly pronounced around major political events and motivates you to further analyze how these communities interact with one another.

#### Brexit Referendum

{% include brexit_neg_activity_animation.html %}

In the Brexit-related graphs, you do not observe subreddits whose names are directly tied to the event itself. Instead, *`shitliberalssay`* is the only prominently visible community among those showing an increase in negative activity, representing a broader political or ideological discussion space.


#### Paris terrorist attack

{% include paris_neg_activity_animation.html %}

* Among subreddits showing increased negative activity related to the Paris attacks, the *`european`* subreddit, which is directly related to Paris, also appears, although to a lesser extent.

* In contrast, *`conspiracy`* and *`shitliberalssay`*, which are not directly related to the event by name, rank highly in terms of increased negative activity within both short and long time windows.

> Overall, this pattern indicates that higher increase in negative activity for these subreddits are primarily observed within the shortest time window surrounding the event.

#### Ebola outbreak

{% include ebola_neg_activity_animation.html %}

The Ebola outbreak does not exhibit a clear event specific pattern in subreddit activity. Across all time windows, the top subreddits with increased negative activity are diverse and do not appear to be directly related to the outbreak itself. 
> Overall, no clear or consistent pattern can be observed in the top negative activity subreddits during this period.

-----

### Analysis 2 — Which Subreddits Interact the Most?

Increased activity alone does not tell the full story. Now, you see things more broadly and extend the analysis to **pairs of subreddits**!
Subreddits have interactions, they actually cite, argue, or support one another! 

```
MISSION GOAL:

- Identify subreddit pairs with the largest hyperlink activity during the event time window. 
- These pairs represent communities that interact frequently and consistently, suggesting ongoing dialogue, or conflict, between them.
```

#### USA Election
{% include us_election_pairs.html %}

* During the US presidential election period, you observe that some politically related subreddits appear in both source_subreddit(*`asktrumpsupporters`*) and target_subreddit(*`the_donald`*, *`enoughtrumpspam`*)!
* You even observe negative hyperlink interactions between subreddits that are both directly related to the election: 
  - in the negative interaction *`asktrumpsupporters → the_donald`*, both the source and the target subreddits are election-related.
This graph shows a slight tendency for negative interactions to occur between subreddits with similar themes.


#### Brexit Referendum
{% include brexit_topic_pairs.html %}

Notably, the *`shitliberalsay`* subreddit, which appeared among the top subreddits with increased negative activity in the Brexit analysis, also appears here as part of the top subreddit pairs.


#### Paris terrorist attack
{% include paris_topic_pairs.html %}


#### Ebola outbreak
{% include ebola_topic_pairs.html %}

* For the Paris attacks and Ebola outbreak periods, you do not observe clear event specific negative interaction patterns between subreddits...
* Across these events, the most frequent interactions mainly involve **general communities**, such as *`askreddit`*, *`circlebroke`*, and *`subredditdrama`*, rather than subreddits directly named after or explicitly focused on the events themselves. While some politically or socially oriented subreddits appear intermittently, no consistent or concentrated interaction structure emerges around these events.

> This suggests that, unlike the US presidential election, these events did not lead to strong or clearly identifiable negative interaction patterns between specific Reddit communities at the pair level.

-----


#### **Introducing Event-Specific Knowledge**

At this point, our previous work becomes essential.

Thanks to earlier **bottom-up exploration**, historical records, and intergenerational knowledge, we already possess a rough understanding of the themes surrounding each event.
From this, we have extracted event-related keywords. This allows us to refine our focus.

-----

### Analysis 3 — Activity Through the Lens of Event Keywords

```
MISSION GOAL:
Going blindly in the data is not easily conclusive! Now you can look for the topic-linked subreddits:
- Filter subreddits by event-related keywords, selecting only those whose names are explicitly linked to the event.Study the subreddit activities over the course of the event 
- Loook for source subreddits that initiated negative hyperlinks
```

This step helps you separate **event-driven activity** from background noise, strengthening the link between observed behavioral changes and the real-world event. Nevertheless, you will also lose potential subreddits involved that have a name not related with the event occurred, but every method comes at a cost!

#### USA Election
{% include us_election_keyword_filtered.html %}

In the case of the US presidential election, multiple election-related subreddits appear within the event window. Among them, *`shitpoliticssays`*, *`political_revolution`*, and *`enoughtrumpspam`* show relatively larger increases in negative activity.


#### Brexit Referendum
{% include brexit_keyword_filtered.html %}

Several event-related subreddits appear within the event window, indicating that the referendum is reflected in the data. 

However, the observed increases in negative activity are relatively small and distributed across multiple subreddits, rather than being dominated by a single community.

#### Paris terrorist attack &Ebola outbreak
For the keyword-filtered analysis around the Paris terrorist attack and the Ebola outbreak, no visible increase in negative activity is observed. 
This indicates that, within these narrow time spans, even subreddits related to the event do not exhibit a measurable rise in negative interactions.

-----

### Analysis 4 — Event-Focused Interactions Between Communities

You have reached the last steps of your mentor's mission goals!
Let's combine both ideas: **interaction** and **contextual filtering**.

```
MISSION GOAL:
- Filter pair of subreddits that both relate to the event through keywords
- Select the pair with the most increased hyperlink activity during the event window.
```

> This may reveal **coordinated discussion hubs** linked with the studied events.

#### USA Election
{% include us_election_keyword_topic_pairs.html %}

* During the US presidential election period, the keyword filtered analysis reveals multiple negative interactions between election-related subreddits, but only with low interaction counts.

* Notably, the same subreddits repeatedly appear as either the source or the target of these negative interactions, suggesting that these interactions are relatively **concentrated** within communities that address similar themes.

#### Brexit Referendum
{% include brexit_keyword_topic_pairs.html %}

The *`europe`* subreddit appears multiple times as a target across different pairs.  
However, given the low interaction counts, this pattern remains weak and does not provide any evidence of a high activity of the topic-linked subreddits in the context of this event.

#### Paris terrorist attack
{% include paris_keyword_topic_pairs.html %}

In the keyword-filtered analysis of the Paris attacks, only four negative interactions are observed.  
These interactions are primarily initiated by the *`engineeredattacks`* subreddit toward other subreddits.  Notably, the detected interactions do not directly involve subreddits explicitly focused on the Paris attacks, suggesting that these negative interactions are unlikely to be specifically driven by the event itself.

#### Ebola outbreak
{% include ebola_keyword_topic_pairs.html %}

For the Ebola outbreak, consistent with the earlier keyword-based negative activity analysis, no clear interaction pattern between subreddits is observed.
The keyword-filtered pair-level analysis reveals only a single negative interaction, indicating that, within this time window, the subreddits captured by the keyword filtering do not exhibit a noticeable increase in negative interactions.

### Significance of time windows
*New message from your mentor:*
```
MISSION GOAL (another one!):
Could you link this approach with the bottom-up analysis?
It could be nice to verify that the significant timeframes you found in the bottom-up correspond to some meaningful events!
```
You decide to target first the "Politics" and "Social Justice" clusters. Your base hypothethis would be that those two themes correspond the most to your previous events.

These events will be used to test our hypothethis of the significant timeframes from the bottom-up analysis.

{% include sentiment_evol_social_justice_w_events.html.html %}
{% include sentiment_evol_politics_w_events.html.html %}

Overall, the events fall into a significant timespan. It makes sense that the Brexit Referendum falls more in the Politics topic and that we see a significant increase for this event.

On the other hand, there are significant increases during the USA election and the Paris attack in the Social Justice topic. These are subjects more controvertial, with people giving their opinion on social matters related to those topics.

> In conlusion, some significant timespan do correspond to events that you defined as meaningful!

But be careful... you can't be sure at 100% that those two facts are indeed correlated.

#### Conclusion
MISSION GOALS DONE! This **top-down analysis based on subreddits activities** examines whether major real-world events are reflected in changes in negative hyperlink interactions between Reddit communities. By focusing on well known global events and analyzing subreddit interactions before and after their occurrence, this approach allows us to assess whether such events leave detectable traces in online community behavior.
However, you realized that some of the tasks you were given were quite limited in their interpretations, as the analysis design was lacking controls (such as the keyword filtering).

**What can you extract from this analysis?**
> Major real world events seem to be reflected in negative interactions between Reddit communities in different ways and with varying intensity. 
> Highly polarizing and discussion driven events, such as the **US presidential election**, generate clear and concentrated patterns of negative interactions. 
> Political events such as the Brexit referendum show limited evidence of negative interaction patterns, which are considerably weaker and more dispersed than those observed during the US presidential election. In comparison, sudden or external crises, such as **terrorist attacks** or **disease outbreaks**, tend to produce more limited and less structured responses at the subreddit interaction level.


## 2. Graph-based analysis
Suddenly, you have some reminiscences of what you learned from your lectures of *Data Analysis* during your long studies that helped you get this internship. *From the astronaut dream, you became a data analyst! But this is a long story for another time.*
You focus again on the hyperlink network, which can actually, be represented as a graph! A graph-based analysis would allow you to explore the interactions between the graph's _nodes_ : the subreddits, source or target of the hyperlinks.

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/graph_img.png)

### 2.1. Graph creation
<details>
<summary><b>Graph creation library</b></summary>
<p>Given the high dimension of our hyperlink network, you use the graph processing library iGraph to create the graph and extract meaningful information, such as node's importance.</p>
</details>

**Directed graph**:
Here, the hyperlink network can be computed as a directed graph because each hyperlink has both a source and a target subreddit, associated with some attributes:

|-------------|------------|
| **weight**     | Number of occurrences of this interaction |
| **weight_pos** | Number of occurrences of this interaction that display a positive sentiment (_LINK_SENTIMENT_ = 1) |
| **weight_neg** | Number of occurrences of this interaction that display a negative sentiment (_LINK_SENTIMENT_ = -1) |

---

**Reduced graph size**:
Fortunately, you can select some events and select only the hyperlinks occuring in the corresponding timespan, thus reducing the overall size of the graph. *You just avoided long hours of running your code*. 

For the different event analysis, you compute different graphs:

|--------------|------------|
| **graph_during** | Contains all the hyperlinks occurring during the event timespan that was defined (_example: 90 days - window_) |
| **graph_before** | Contains all the hyperlinks occurring before the event, with the same timespan (_example: 90 days - window before the start of the event_) to allow for comparisons |
| **graph_after**  | Contains all the hyperlinks occurring after the event, (_example: 90 days - window after the end of the event_) with the same timespan to allow for comparisons |

<details>
<summary><b>Some important remarks</b></summary>
<p>The graphs don't necessarily share the same subreddits, as some might have interactions in a given timespan and not after. Solution found! You combine all those graphs based on the common subreddits. The obtained graphs are very sparse,... but... it is quite normal and expected for a real-world network! You will only focus on the giant connected component (contains around 90% of the nodes). </p>
</details>

### 2.2. Graph metrics

**What can you extract from this messy web?**
To analyse a graph, you can compute different metrics to assess the importance of the subreddits in the graph (as _nodes_) both on a local scale considering their neighboring interactions, and on a global scale, considering its importance on the overall network structure.
Here you compute the following metrics:

| Metric            | Computation | Meaning |
| :---------------- | :------: | :----: |
| in_degree         |   Number of hyperlink **received** | **Popularity** measure: _how many subreddits talks about this one?_      |
| out_degree        |   Number of hyperlink **sent**     | **Activity measure**: _how many subreddits are reached from this one?_   |
| total_degree      |  in_degree + out_degree            | **Interaction** measure: _how many neighbors in the graph?_             |
| degree_centrality |  total_degree normalized to the total of possible connections   | **Interaction** measure: _how many neighbors in the graph?_ |
| closeness_in      | inverse of the shortest paths lengths from other nodes to this one | **Centrality measure** : _how easily is this subreddit reachable?_|
| closeness_out      | inverse of the shortest paths lengths from this node to the others | **Centrality measure** : _how easily do we reach other subreddits from this one?_|
| betweenness      |     Based on the number of shortest paths on the network that pass through this node         | **Cluster connection** measure: _does this node acts as a bridge between different clusters?_ |
| pagerank      |  Computed using an algorithm, score pages based on how likely a random walk would land on it         |  **Importance** measure: _a node connected to important subreddits is also more important_  |

### Time-analysis of graph metrics
After all this setup, it is finally time to have fun. You found out about 3 events after a hard labour research: 

- **Politics**: 2016 US Election
- **Gaming / Social Justice**: 2014 Gamergate
- **Sports**: 2014 FIFA World Cup

For each event, you compare the dynamics between:
- **The overall graph**
- **Subreddits selected from the corresponding cluster**: _example: subreddits in the graph that are within the Politics cluster_ -> those subreddits might not be perfectly linked with the subject, as it is a broader approach and they cluster based on similar users activity
- **Subreddits selected using keywords (=_Topic-linked subreddits_)** : _example: subreddits that contain the keyword donald_ this selection allows us to refine your analysis to directly topic-linked subreddits.

Here you go, let’s travel back to an era when the digital world was at its most lively (and most conflicted...)! 

**FIND THE 3 CASE STUDIES ON THE BOTTOM OF THE WEBPAGE**


# CONCLUSION
By combining bottom-up community-level analysis with top-down event-focused exploration, you ended your internship with some useful insights on how to reconstitute Earth history using some corrupted ancient data from Earth communities one century ago. 
You finally reached the end of your internship. You wished you could have stayed longer in the *Earth History* Center to continue this thrilling analysis...

*

*

*

3 months later: *Notification Alert*

*

*

*

<details>
<summary><b>Letter from the Center of Earth History: tap to open</b></summary>
<p>Congratulations! You got accepted as a Data Analyst in the Center of Earth History.</p>
</details>

