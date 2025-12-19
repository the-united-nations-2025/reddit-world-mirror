---
layout: post
title: GAMING/SOCIAL JUSTICE - Gamergate 2014
subtitle: Case study for graph-based analysis
cover-img: /assets/img/Gaming_cover.jpg
thumbnail-img: /assets/img/Gaming_cover.jpg
---

Even tho most of the world events you found in the mothership archives are political events, let's take a break from all this politics! Fortunately, on the spacecraft, we have the best interplanetary gamer! He must know some stories about gaming... Let's switch to gaming, but actually not the fun part... Here is what he told you about:

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/GAMERGATE.png)

This Gamergate case study is a perfect example of communities rivalries, as you can analyze both the 'Gaming' side and the 'Social Justice' side. It is now that the sentiment of hyperlinks become handy! 
> *Key tool*: The graphs created with iGraph contain the sentiment information on each edge. From this, you can compute the proportion of negative and positive links going to or going out of a node.

Let's try to see if you can find some remaining scars of this event in the Reddit hyperlink network.

## Event timespan 
The Gamergate started in August 2014 and ended in early 2015, so you decided the following timespan to cover the event:
- **START** = 1st August 2014
- **END** = 1st January 2015

## Sentiment analysis - Gaming subreddits
First, you focus on the **gaming** community, thought to be the source of the attacks during the Gamergate.

* **Gaming** : both the cluster and the keyword filtering are based on broad gaming, the filtering by keywords might be more specific to gaming while the cluster might contain also other subreddits having common users activity but that are a bit further from gaming.
*NB: Both filtering methods lead to more than 100 subreddits in each case, making CCDF plots and statistical tests reliable for analysis.*

<iframe src='https://flo.uri.sh/story/3516066/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
<details>
<summary><b>Number of subreddits in each selection</b></summary>
<p>Number of common subreddits in the graphs: 3270 
Number of subreddits linked to the Gaming cluster: 146 
Number of subreddits directly linked with the topic: 127</p>
</details>

**Expectations**:
The interesting metric to study for the gaming community is the proportion of negative links (***out_neg_prop***) coming out of the nodes from the subgraph. *Gaming subreddits are attacking other subreddits!*

**Results**:

{% include Gamergate_gaming_outneg_hist.html %}

As the previous metrics studied in the US Election case study, the ***out_neg_prop*** metrics present a heavy-tailed distribution, thus making the CCDF plots helpful to compare the distribution evolution of this metric. 

{% include Gamergate_gaming_outneg_CCDF.html %}

---

> 1. CLUSTER-FILTERED

**Kolmogorov–Smirnov distribution test**  
_Metric: proportion of negative hyperlinks sent_

| Comparison           | KS stat  | p-value  | Significant |
|----------------------|---------:|---------:|:-----------:|
| Before vs During     | 0.1625  | 0.693948 | Not significant |
| During vs After      | 0.1321  | 0.849459 | Not significant |
| Before vs After      | 0.2000  | 0.422983 | Not significant |

---

> 2. KEYWORD-FILTERED

**Kolmogorov–Smirnov distribution test**  
_Metric: proportion of negative hyperlinks sent_

| Comparison           | KS stat  | p-value  | Significant |
|----------------------|---------:|---------:|:-----------:|
| Before vs During     | 0.1500  | 0.938851 | Not significant |
| During vs After      | 0.3077  | 0.163381 | Not significant |
| Before vs After      | 0.3577  | 0.082882 | Not significant |

---
Both visualization and non-parametric Kruskal-Wallis test suggest non-significant differences and no clear trends for both filtering methods...

**Interpretation**:
> Unconclusive analysis... *but don't be discouraged, you can still look at the target communities now!*

## Sentiment analysis - Target subreddits
Let's shift our perspective and study the targeted communities, linked to feminism and journalism. 

* **Target subreddits**: the topic-linked subreddits are selected using keywords related to feminism and journalism, thought to be the target of the attacks. The broad linked cluster is therefore *Social Justice*.

<iframe src='https://flo.uri.sh/story/3516063/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
<details>
<summary><b>Number of subreddits in each selection</b></summary>
<p>Number of common subreddits in the graphs: 1226 
Number of subreddits linked to the Social justice cluster: 139 
Number of subreddits directly linked with the topic: 7</p>
</details>

**Expectations**:
The interesting metrics here are both the **proportion of negative hyperlinks of received and sent**: indeed, the targeted communities can be attacked but also respond back to this attack!

**Results**:

{% include Gamergate_socialjustice_hist.html %}

As expected both in and out negative link proportions follow a heavy-tail distribution that was studied using CCDF log-log plots.

{% include Gamergate_socialjustice_CCDF.html %}

No significant differences in distribution was observed using Kolmogorov-Smirnov non-parametric test for both methods of filtering.

Considering the low number of topic-linked subreddits (_n=17_), you should be careful about interpretations. Even tho the distribution of negative linked sent by the topic-linked subreddits seems to be right shifted, no consistent clear trend appear in the CCDF plots!

**Interpretation**:
> Another unconclusive analysis... The attacks between gaming and social justice subreddits are not perpectible with this sentiment analysis of the network.
After taking a break in the low-gravity rooms to clear your minds, you decide to explore this further and dive into the connections between each topic-linked subgraphs.

## Structural analysis - subgraphs interactions
***How can you represent the two subgraphs evolution of interactions?***

<details>
<summary><b>Key tool: average shortest path length</b></summary>
<p> Average shortest path length can be used as a proxy! Here you compute this metric in a pair-wise combination manner, meaning that you take the shortest paths between each possible pair of subreddit, one from the Source (Gaming) and one from the Target subreddits. 
</p>
</details>

**Expectations**: A lower average path length would mean that those two groups are more interacting (or have more common intermediate nodes) during this time period.

**Results**:

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/average_short_interaction_GAMERGATE.png)

---
> 1. CLUSTER-FILTERED
**Kruskal-Wallis test**  
- H-stat: 368.319  
- p-value: 1.05e-80  
At least two groups have different medians

**Post-hoc Dunn test**

| Group1 | Group2  | p-value        | Significant |
|--------|---------|---------------:|:-----------:|
| After  | Before  | 1.76e-78       | Significant |
| After  | During  | 9.18e-10       | Significant |
| Before | During  | 1.34e-36       | Significant |

---

> 2. KEYWORD-FILTERED
**Kruskal-Wallis test**  
- H-stat: 118.132  
- p-value: 2.23e-26  
At least two groups have different medians

**Post-hoc Dunn test**

| Group1 | Group2  | p-value        | Significant |
|--------|---------|---------------:|:-----------:|
| After  | Before  | 8.91e-25       | Significant |
| After  | During  | 1.60e-02       | Significant |
| Before | During  | 3.05e-15       | Significant |

---

Kruskal Wallis test, followed by Dunn's posthoc test were performed and gave statistically significant differences. For both methods of clustering, the evolution of the average path length between each subgraph is significantly increasing from before to during and then to after the Gamergate event.

**Interpretation**:
>The two subgraphs are less and less linked over the course of the event, which reveals no increase in interactions between the Gaming subreddits and their targets.

## ***What can you conclude from this case study?***
>The Gamergate event is not perceptible in the Reddit dynamics, which is probably because the majority of the attacks happened in other social Networks (like Twitter) and Reddit only had follow-up waves not detected here.

