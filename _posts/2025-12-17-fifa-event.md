---
layout: post
title: SPORTS - FIFA World Cup 2014
subtitle: Case study for graph-based analysis
cover-img: /assets/img/football_cover.png
thumbnail-img: /assets/img/football_cover.png
---

![event_image](https://the-united-nations-2025.github.io/reddit-world-mirror/assets/img/FIFA_WORLD_CUP.png)

Space football is not very popular (_you can imagine why_) but, many people around you enjoy to gather together to watch old football games (_from the good old days..._). As you also really enjoy it and recently saw 2014 Germany-Argentina final, you decide to study this event.

## Event timespan and select subreddits
You define the following timespan: 
- **START** = 12th June 2014
- **END** = 17th July 2014 (extended end, to take into account people reactions)

You will filter subreddits that belong to the _Sports_ cluster, and then select the following keywords to filter topic-linked subreddits (more specific!):
<iframe src='https://flo.uri.sh/story/3515949/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

## Time analysis of node metrics
**Expectations**:
The subreddits linked to the World cup are expected to become the center of attention during the event, being cited by new subreddits and having more interactions than in normal times.


**Results**:
As seen previously (*US Election event*), *in_degree* and *pagerank* metrics present a heavy-tail distribution, resulting in useless study of the mean only, while *closeness_in* presents a bimodal distribution. 
With this previous knowledge, **violin pots** are quite useful to observe the distribution of the node metrics, that are displayed below from the overall subreddit network to a more refined analysis by filtering with _Sports_ cluster then with specific Topic-linked subreddits.
{% include Worldcup_metrics_comp_violinplot.html %}

<details>
<summary><b>All subreddits</b></summary>
<p>No difference between the time periods when all the subreddits are used.</p>
</details>

<details>
<summary><b>Sports-filtered subreddits</b></summary>
<p>Visual inspection of the metrics distribution shows a higher value shift on the during and after time periods compared to the before</p>
</details>

<details>
<summary><b>Topic-linked subreddits</b></summary>
<p>Same higher value shift as the cluster-filtering seems to happen, but mostly for the during period, which seems to align with the expectations as this more refined analysis targets better the event-implied subreddits and shows dynamics during the event.</p>
</details>

**STATISTICAL TEST**

---

> 1. CLUSTER-FILTERED
**Kolmogorov–Smirnov test**  
*closeness_in metric*

| Comparison | KS | p-value | Result |
|-----------|----:|--------:|--------|
| Before vs During | 0.475 | 1.97e-4 | Significant |
| During vs After  | 0.137 | 0.834   | Not significant |
| Before vs After  | 0.495 | 3.30e-4 | Significant |

---

> 2. TOPIC-LINKED
**Kruskal–Wallis test**  
*closeness_in metric*

| Comparison | KS | p-value | Result |
|-----------|----:|--------:|--------|
| Before vs During | 0.857 | 8.16e-3 | Significant |
| During vs After  | 0.571 | 0.147   | Not significant |
| Before vs After  | 0.429 | 0.575   | Not significant |


The non-parametric **Kolmogorov-Smirnov** test finds significant differences in the distribution shape of **closeness_in** between _before_ and the _during_ (or the _after_ for _Sports_ subreddits) period!

---

**Interpretation**:
> The subreddits linked with sports, or more specifically football & the 2014 world cup, seem **more reachable during and after the FIFA World Cup**, meaning that other subreddits cited them more often!

*NB: BUT... Always be cautious! Remember the results of the filtering: only 7 subreddits are within this keyword-selection... quite small to make reliable interpretations...*

 