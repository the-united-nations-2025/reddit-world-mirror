# Context

#### _[January 2nd 2174]_

You know the history books, but they are mostly blank pages. The world we are trying to study, _Earth_, was fine until the **Global Conflict of 2080** happened. That massive war totally destroyed the planet, made it completely unviable, and forced all surviving civilization to pack up and leave in huge spacecraft vessels. Nothing from this ancient, moderned and highly developed civilization, called Humans, survived the disaster.

So now, here we are in 2174, and we still have a big hole in our understanding of what actually led up to that collapse, and more generally of the life of this civilization in Earth almost 100 years ago. That's where you come in.

As an **Intern in Earth History**, you have been designated to participate to the huge project to reconstruct Earth’s past. Your specific mission is to **reconstruct the history of the volatile 2014–2017 era**. You need to figure out how that advanced society broke down.

The main **Research Questions** you need to tackle are the following:
1. Can world events in times of crisis be reflected in the sentiment evolution of subreddits interactions?
2. Can world events affect the dynamics of subreddits interactions?

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

**Mission Status**: We now have our tools and we know who the players are. Now, we can finally zoom out and look at the whole timeline to see if we can spot the moment Earth started to trend toward chaos. Let's start by a Bottom-Up analysis.

## Bottom-up approach

#### 2.0 Overall evolution of hyperlink sentiment

Now that we have finished the tools and identified the main players, let's look at the big picture. The hard part start : putting it all on a timeline. You have millions of data points, so your first task is to calculate the Normalized Conflict Fraction every single month for the entire archive, so from 2014 to 2017 to see if we could spot the moment everything started to slide toward the Great Collapse.

{% include proportion_negative_over_time.html %}

**The Verdict: It’s a Mess.**
Look at that graph. If you were hoping for a clean, straight line that tells a simple story, forget it. You can try changing the bin size: day, week, month. But look at the monthly view: it's a mess! The line is jumping all over the place. It's almost impossible to figure out what caused the ups and downs. At this scale, everything is blurred together. A massive political revolution looks the same as a little server crash.

You have to refine your analysis. You can't analyze 55,000 subreddits one by one. A solution is to use **clustering**.

#### 2.1 Clustering

Looking at individual subreddit is not that significant and it's quite difficult to interpret, as we could observe in the preliminary analysis.

**What should we do now ?**

Maybe we should try another approach. What if we looked at the evolution of subreddits that have the same thematic ? Maybe for example, by looking at all the groups about politics, we can observe out of normal behaviours.

But the majority of subreddits aren't very active, with very few posts in the span of 3 years. Taking all the subreddits might give us noisy results. We decided to arbitrarily choose the subreddits with a total post counts of at least **100 posts**.

How are we going to group similar subreddits ? From the last remaining piece of information from earth great collapse, we found ancient representations of the said subreddit that they called **embeddings**. Maybe we can use that to our advantage: what if two similar subreddit had **similar embeddings** ?

Using a technique called **clustering**, we can group vectors by how close they are to each other. **K-Means** is an unsupervised machine learning algorithm used to group data into K clusters based on similarity.

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

Firstly, to find the optimal number of cluster (i.e the optimal number of different topics), we are going to use the **Elbow Method**.

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

We find an optimal k of 4. This seems a bit low and not specific enough, we might have too broad cluster subjects. The second best option seems to be a better alternative. We would likely choose 13 clusters.

Secondly, we will apply a method known as the **DB Scan** to remove the outliers that are far away from others subreddits (i.e maybe too unique).

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

Let's now visually confirm that similar subreddits sit close to each other in the embedding space. But right now we have multidimensional vectors that are nos suited for plotting in 2d or 3d. We are going to use the **T-SNE and PCA dimension reduction method**.

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
* On the other hand, the T-SNE plot clearly shows clusters, corresponding to each cluster theme we found. It is important to note that the classification isn't perfect but shows interesting informations still.


#### 2.3 Cluster negative and positive comments evolution analysis
Now that we have our clusters, we can analyze the **trend evolution of negative or positive posts** for a given topic.

This could be usefull if we want to identify a **significant event** related to a given topic (for example: a major politic event at time t might lead to a significant increase in the trend of the politic cluster.)

But what is a **significant increase** ?

We followed two methods:

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
  <summary><b>1. Rolling Average</b></summary>
  <div style="margin-top: 10px;">
    <b>Why?</b> Because the rolling average acts as a smoothed baseline, calculated using a defined window (you can define the wanted window as a parameter), which helps to visually identify deviations from the expected trend. When the post sentiment count falls <b>above</b> the rolling average, it suggests that the post sentiment count has <b>increased</b> relative to its typical trend. Here, a simple moving average was implemented as followed:
    
    $$\text{RollingAvg}_t = \frac{1}{w} \sum_{i=0}^{w-1} x_{t-i}$$
    
    where:
    <ul>
      <li>$x_t$: count at time $t$</li>
      <li>$w$: window size (number of points in the average)</li>
      <li>$\text{RollingAvg}_t$: average of the current and previous $w-1$ counts</li>
    </ul>
  </div>
</details>


<details>
  <summary><b>1. Rolling Average</b></summary>
  <p>
  **Why** ? Because the rolling average acts as a smoothed baseline, calculated using a defined window (you can define the wanted window as a parameter), which helps to visually identify deviations from the expected trend. When the post sentiment count falls **above** the rolling average, it suggests that the post sentiment count has **increased** relative to its typical trend. Here, a simple moving average was implemented as followed:
  $$\text{RollingAvg}_t = \frac{1}{w} \sum_{i=0}^{w-1} x_{t-i}$$
  where:
  - $x_t$: count at time t
  - $w$: window size (number of points in the average)
  - $\\text{RollingAvg}_t$: average of the current and previous  counts
  </p>
</details>


<details>
  <summary><b>2. Modeling using a Poisson Law</b></summary>
  <p>
  Let's assume our negative/positive follows a Poisson law. This is appropriate because:

Counts of events are observed in a **fixed unit of time, space, or sequence**.

In your case, positive or negative counts are observed per time step.

We assume events occur **independently**.

Each sentiment count at one time step is assumed not to directly affect counts at another time step, at least within the window.

We assume the **mean** equals the **variance** (or approximately).

Poisson assumes that the expected count (λ) is equal to the variance of counts.

Small deviations are acceptable, but large overdispersion may require a Negative Binomial model.

We are going to take the count evolution on a sliding window of a **given duration** (ex: 3 months). In each time window, we will fit the counts to a Poisson Law and look at the increase or decrease.

This method uses a **Generalized Linear Model (GLM) with a Poisson family** to detect **statistically significant increasing trends** in count data over time.
  </p>
</details>


Model formulation

For each sliding time window, the following model is fitted:



where:

 is the observed count at time 
 is the expected count
 is the time index
 represents the **log-rate of change** over time
The **log link function** ensures that predicted counts remain positive.

Sliding window approach

The model is fitted on **overlapping time windows** of fixed length.
This allows detection of **local increases** rather than a single global trend.
Hypothesis testing

For each window, the following hypotheses are tested:

Null hypothesis:


Alternative hypothesis:


A window is considered significant if:

 the chosen significance threshold
Interpretation of the trend coefficient

: exponential increase in expected counts
: multiplicative change in the expected count per time unit
Example:

Output

The method returns all time windows where a **statistically significant increase** in sentiment-related counts is detected, including:

Window start and end times
Estimated trend coefficient
Associated p-value
Limitations of this method

Observations are probably no conditionally independent.
Mean equals variance is probably not the case.
A **Negative Binomial GLM** may be more appropriate but the problem is that the data is not sufficient to model it.

So as a first approximation we will use **Poisson GLM**.


{% include significant_increases_plot.html.html %}

**Observations**:

* We can ignore the _first significant time window_ as it is just due to the start of the counts (mismatch between the starting date of the plot and the starting date of the counts).
* The _significant time windows_ seem to follow the time windows where the counts are above the rolling average in a sufficient manner.

**Conclusions**:

* From our observations, we could form the hypotethis that, in the significant time windows, major world events happened at the global political scale, leading to the **potential time windows of the collapse of society** !
* These observations do not give us any informations on the groups involved nor the matter of the event.

#### 2.4 Individual subreddit contribution
Now, we can look at the significant time windows and extract the top active subreddits of the cluster ! This could give us an insight on who's been contributing the most to the negative increase.

{% include top_negative_subreddits.html.html %}

So, we now have tools to find meaningful timespan where conflicts emmerged during the **Great collapse**. We can now link this to the archives on the mothership, where we could find historical events to compare.

## Top-down approach 

The bottom-up approach gave us insights on the events timeline leading to the **Great Collapse**. You now remember that on the _mothership_, there are still ancient archives of **Earth History**.

You decide to go look through them, to maybe find significant events that we might relate to our analysis. After long nights under the dim lights of the archives, and after sacrifying your mental sanity, you manage to find significant events that you would consider as _potential disasters_.

#### 2.1 Studying negative hyperlinks
Analysis 1 and 3 aim to study which subreddists have increased their activity the most in a concrete timespan that is related to the ocurrence of a main world event. The objective is to see whether the most active subreddits are or not related with the event. The difference is that on analysis 3 this is performed by filtering in keywords related to the event.

Analysis 2 and 4 aim to study which pairs of subreddits are more active in a timespan related to the main world event. As before, on analysis 4 this is performed filtering by keywords related to the event.

##### 2.1.1 1st analysis performed:
Study which subreddits have increased the most their activity in a timespan related to the main word event. Therefore, we can observe if the subreddits that have increased their activity the most are or not related to the main world event. We obtain this information by the name of the subreddits.
_(We adjust the three window lengths according to the event impact or event characteristics.)_

**USA elections**:

Here it has been ploted top 15 subreddits that have increased their activity the most in 3 different timespans:
* 15 days before and after the Election day
* 30 days before and after the Election day
* 120 days before and after the Election day

{% include USA_elections.html-2.html %}

A notable pattern emerges around the 2016 US presidential election. In the ±15 days window, politically related subreddits such as enoughtrumpspam, the_donald, and political_revolution appear among those with the largest increases in negative activity.
As the time window expands to ±30 days, several of these communities remain prominent, including enoughtrumpspam, political_revolution, and shitpoliticssays. In the ±120 days window, election-related subreddits such as the_donald and bannedfromthe_donald continue to appear.

This observation suggests a relationship between the US presidential election and increased activity in politically related subreddits, as reflected in the animation.

**Brexit Referendum**:

Here it has been ploted top 15 subreddits that have increased their activity the most in 3 different timespans:
* 5 days before and after the Brexit referendum day
* 15 days before and after the Brexit referendum day
* 30 days before and after the Brexit referendum day

{% include brexit.html-2.html %}

In the Brexit related graph, we do not observe subreddits whose names are directly tied to the event itself. However, several broader political or ideological, such as shitliberalsay appear among those with increased negative activity.
As the time window expands to ±15 days and ±30 days, shitliberalsay remains visible among the active subreddits. This suggests that, during the Brexit period, broader political and ideological discussion communities became more active, even if they were not explicitly named after the event.

**Paris terrorist attack**:

Here it has been ploted top 15 subreddits that have increased their activity the most in 3 different timespans:
* 5 days before and after the Paris terrorist attack
* 15 days before and after the Paris terrorist attack
* 30 days before and after the Paris terrorist attack

{% include paris_attack.html.html %}

In this event, an interesting observation is that the conspiracy subreddit remains visible with high levels of negative activity across all time windows. In addition, although to a lesser extent, the europe subreddit also appears, which is related to Paris.

Interestingly, we also observe that the shitliberalsay subreddit appears prominently during both the Paris attacks and the Brexit period, while not appearing in other events.

**Ebola outbreak**:

Here it has been ploted top 15 subreddits that have increased their activity the most in 2 different timespans:
* 5 days before and after the Ebola outbreak
* 15 days before and after the Ebola outbreak
* 30 days before and after the Ebola outbreak

{% include ebola.html-2.html %}

The Ebola outbreak does not exhibit a clear event specific pattern in subreddit activity. Across all time windows, the top subreddits with increased negative activity are diverse and do not appear to be directly related to the outbreak itself. Overall, no clear or consistent pattern can be observed in the top negative activity subreddits during this period.

##### 2.1.2 2nd analysis performed:

During a specific time period, which pairs of subreddits were most frequently involved in negative hyperlink interactions related to a given event?

**USA elections**:

{% include pairs_USA_elections.html.html %}

During the US presidential election period, we observe hyperlink interactions between subreddits that are both directly related to the election.
An interesting observation is that, in the negative interaction asktrumpsupporters → the_donald, both the source and the target subreddits are election-related.

**Brexit Referendum**:

{% include pairs_brexit_referendum.html.html %}

**Paris Terrorist Attacks**:

{% include pairs_paris_attack.html.html %}

**Ebola Outbreak**:

{% include pairs_ebola.html.html %}

For the Brexit Referendum, Paris attacks, and Ebola outbreak periods, we do not observe clear event specific negative interaction patterns between subreddits. Across these events, the most frequent interactions mainly involve general communities, such as askreddit, circlebroke, and subredditdrama, rather than subreddits directly named after or explicitly focused on the events themselves. While some politically or socially oriented subreddits appear intermittently, no consistent or concentrated interaction structure emerges around these events.

This suggests that, unlike the US presidential election, these events did not lead to strong or clearly identifiable negative interaction patterns between specific Reddit communities at the pair level.

##### 2.1.3 3rd analysis performed:

Find the 15 source subreddits (filtered by words related to the event) that initiated the largest number of negative hyperlinks in a timespan related to the world major event.

**USA elections**:

{% include source_USA_elections.html.html %}

Subreddits such as shitpoliticssays, political_revolution, and enoughtrumpspam show relatively larger increases, indicating that even within explicitly event-related communities, the level of engagement is heterogeneous.

**Brexit Referendum**:

{% include source_brexit.html.html %}

Overall, the observed increases are small and relatively uniform across subreddits.

While communities such as labouruk show slightly higher activity, no subreddit clearly stands out. This suggests that, even among explicitly event related subreddits, negative activity remains limited and does not concentrate strongly on specific subreddits.

**Paris Terrorist Attack**:

{% include source_paris_attack.html.html %}

*Meaning that there isn't any subreddit (that contains one keywords) that has increased its hyperlink counts in the timespan.

**Ebola Outbreak**:

{% include source_ebola.html.html %}

*Meaning that there isn't any subreddit (that contains one keywords) that has increased its hyperlink counts in the timespan.

For the keyword-filtered analysis around the Paris attack and the Ebola outbreak, no visible increase in negative activity is observed.
This indicates that, within these narrow time spans, even subreddits explicitly related to the events do not exhibit a measurable rise in negative interactions.

##### 2.1.4 4th analysis performed:

During a specific time period, which pairs of subreddits (filtered by keywords) were most frequently involved in negative hyperlink interactions related to a given event?

**USA elections**:

{% include pairs_keyword_USA.html.html %}

During the US presidential election period, the keyword-filtered analysis reveals multiple clear negative interactions between election related subreddits.

Notably, the same subreddits repeatedly appear as either the source or the target of these negative interactions, suggesting that such interactions are relatively concentrated among a small set of specific subreddits within the filtered scope.

**Brexit Referendum**:

{% include pairs_keyword_brexit.html.html %}

While the number of detected negative interactions is limited, the europe subreddit appears multiple times as a target across different pairs.
However, given the low interaction counts, this pattern remains weak and does not provide strong evidence of event-driven negative dynamics.

**Paris terrorist attacks**:

{% include pairs_keyword_paris.html.html %}

In the keyword-filtered analysis of the Paris attacks, only four negative interactions are observed.
These interactions are primarily initiated by the engineeredattacks subreddit toward other subreddits. Notably, the detected interactions do not directly involve subreddits explicitly focused on the Paris attacks, suggesting that these negative interactions are unlikely to be specifically driven by the event itself.

**Ebola outbreak**:

{% include pairs_keyword_ebola.html.html %} 

For the Ebola outbreak, the keyword filtered analysis reveals only one negative interaction, suggesting that no clear interaction pattern emerges during this period.

##### 2.1.5 Analysis Results
The top-down analysis examines whether major real-world events are reflected in changes in negative hyperlink interactions between Reddit communities. By focusing on well known global events and analyzing subreddit interactions before and after their occurrence, this approach allows us to assess whether such events leave detectable traces in online community behavior.

Overall, the results indicate that major real world events are reflected in negative interactions between Reddit communities in different ways and with varying intensity. Highly polarizing and discussion driven events, such as the US presidential election, generate clear and concentrated patterns of negative interactions. Political events such as the Brexit referendum show limited evidence of negative interaction patterns, which are considerably weaker and more dispersed than those observed during the US presidential election. In comparison, sudden or external crises, such as terrorist attacks or disease outbreaks, tend to produce more limited and less structured responses at the subreddit interaction level.




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


