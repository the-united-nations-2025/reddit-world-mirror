---
layout: post
title: POLITICS - US Presidential Election 2016
subtitle: Case study for graph-based analysis
cover-img: /assets/img/US_ELECTION.png
thumbnail-img: /assets/img/US_ELECTION.png
---
In the archives of the spaceship you dug out some interesting old papers, all talking about political events from the early 200s. A nugget of gold for your analysis! A newspaper from 2016 attract your attention, let's see what it is talking about...

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/US_ELECTION.png)


## Event timespan and select subreddits
To take into account the election campaign that takes place before the official election day, you define a timespan of 3 months covering the campaign, the election day, and the following days where reactions on the election can occur:
    - **START** = 7th September 2016
    - **END** = 7th December 2016

Before analyzing, you need to filter the subreddits in the graph to select the ones found in the 'Politics' cluster or more specifically, containing the following keywords of the event:
<iframe src='https://flo.uri.sh/story/3516127/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
<details>
<summary><b>Number of subreddits in each selection</b></summary>
<p>Number of common subreddits in the graphs: 3035 
Number of subreddits linked to the Politics cluster: 155 
Number of subreddits directly linked with the topic: 15</p>
</details>

## Time analysis of node metrics

**Expectations**:
During the event, the subreddits directly linked to the topic should have more overall interactions with other subreddits in the graph and specifically be more cited by other subreddits, as this is a worldwide event, with a high media coverage. 

The interesting metrics here are: 
* Local metric = *in_degree* proportion
* Metric of importance of node in the network = *closeness_in* and _pagerank_

**Results**:

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/barplot_us.png)

Compared to the other metrics, the *closeness_in* barplot is interpretable as the metric is not heavy-tailed, and show significant increase during the event.

---

> KEYWORD-FILTERED SUBREDDITS
**Kruskal-Wallis test**  
- Metric: closeness_in  
- H-stat: 6.154  
- p-value: 0.0461  
At least two groups have different medians
**Post-hoc Dunn's test**

|         | After | Before | During |
|---------|:-----:|:------:|:------:|
| After   | ❌    | ❌     | Significant     |
| Before  | ❌    | ❌     | ❌     |
| During  | Significant    | ❌     | ❌     |

Kruskal Wallis test followed by Dunn's test show significative difference between _before_ and _during_ time windows.

---

{% include US_election_in_degree_hist.html %}
{% include US_election_pagerank_hist.html %}


The barplot representation shows very large errorbar for the other metrics, resulting in hardly interpretable plots. When you look at their distribution, you realize that this is caused by a heavy-tailed distribution for *in_degree* and *pagerank* metrics. The adequate plot for those is therefore a **CCDF log-log axes** representation.

{% include US_election_in_degree_CCDF.html %}
{% include US_election_pagerank_CCDF.html %}

Using Kolmogorov–Smirnov test to compare distributions, this shift is not statistically significant, probably due to the small number of topic-linked subreddits (n = 15).

**Interpretation**:


> The significant increase of the closeness_in metric during the event suggests that **the topic-linked subreddits become more reachable in the network during the event**.


> Comparing the evolution of *in_degree* and *pagerank* metrics for the different subsets of subreddits lead to different interpretations.
- Overall network and subreddits from the 'Politics' cluster don't show meaningful differences in both metrics over time.
- The topic-linked subreddits present a clear **rightward shift of pagerank metric** during the event, which could indicates increased concentration of **high-centrality subreddits**
-  However, this difference in distribution is not significant.

## Time analysis of subgraph repartition in the overall network
Another useful analysis consists in the repartition of the topic-linked subreddits in the overall graph and its evolution over time.

*   _Do the topic-linked subreddits become more **sparse** over the course of the event, corresponding to a shift of their interactions towards/from other subreddits than usual?_

*   _Or, inversely, do they become more **dense** and have more interactions together, which could correspond to discussion about the event?_

To study this evolution, we computed the **average shortest path length** as a proxy of density to characterize the structural proximity of the selected subreddits within the overall network.A higher average indicates a higher sparsity of those subreddits in the network, whereas a lower average indicates an increase in their density within the structural network.

<details>
<summary><b>Key tool: Average shortest path</b></summary>
<p>The average shortest path was computed using all the possible combinations of subreddits within the subgraph and computing the shortest path algorithm for each pair.</p>
</details>

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/average_short_US.png)

**Results**:
From the plot, the subgraph don't seem to have a directed evolution of their density, which is confirmed by no statistically significant difference using the non-parametric test Kruskal Wallis.

**Interpretation**:
> Both the Politics cluster and the topic-linked subreddits have a stable density over the course of the event. Then analyzing the subgraph density/sparsity was not a good approach to find the event dynamics in this top-down approach.

## ***What can you conclude from this case study?***
> Nevertheless, you can only say from this study that during the US election of 2016, topic-linked subreddits became more reachable, thus more cited in the network.
