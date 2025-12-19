---
layout: post
title: SPORTS - FIFA World Cup 2014
subtitle: Case study for graph-based analysis
cover-img: /assets/img/football_cover.jpg
---

# FIFA WORLD CUP 2014

![image-title-here](/assets/img/FIFA_WORLD_CUP.png){:class="img-responsive"}

Space football is not very popular (_you can imagine why_) but, many people aournd you enjoy to gather together to watch old football games (_from the good old days..._). As you also really enjoy it and recently saw Germany-Argentina final, you decide to study this event.
 
## Event timespan and keywords
You define the following timespan: 
- **START** = 12th June 2014
- **END** = 17th July 2014 (extended end, to take into account people reactions)

You will filter subreddits that belong to the _Sports_ cluster, and THEN select the following keywords to filter topic-linked subreddits (more specific!):
<iframe src='https://flo.uri.sh/story/3515949/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

![image-title-here](/assets/img/FIFA_KEYWORDS.png){:class="img-responsive"}

## Time analysis of node metrics
**Expectations**:
The subreddits linked to the World cup are expected to become the center of attention during the event, being cited by news subreddits and having more interactions than in normal times.


**Results**:
{% include Worldcup_metrics_comp_violinplot.html %},

>As seen previously (*US Election event*), *in_degree* and *pagerank* metrics present a heavy-tail distribution, resulting in useless study of the mean only, while *closeness_in* presents a bimodal distribution. 
> With this previous knowledge, **violin pots** are quite useful to observe the distribution of the node metrics, that are displayed below from the overall subreddit network to a more refined analysis by filtering with _Sports_ cluster then with specific Topic-linked subreddits.

<details>
<summary><b>All subreddits</b></summary>
<ol>
<li>No difference between the time periods when we use all the subreddits.</li>
</ol>
</details>

<details>
<summary><b>Sports-filtered subreddits</b></summary>
<ol>
<li>Visual inspection of the metrics distribution shows a right shift on the during and after time periods compared to the before</li>
</ol>
</details>

<details>
<summary><b>Topic-linked subreddits</b></summary>
<ol>
<li>Same right shift as the cluster-filtering seems to happen, but mostly for the during period, which seems to align with the expectations as this more refined analysis targets better the event-implied subreddits and shows dynamics during the event.</li>
</ol>
</details>

**STATISTICAL TEST**

The non-parametric **Kolmogorov-Smirnov** test finds significant differences in the distribution shape of **closeness_in** between _before_ and the _during_ or the _after_ period!

**Interpretation**:
> The subreddits linked with sports, or more specifically football & the 2014 world cup, seem **more reachable during and after the FIFA World Cup**, meaning that other subreddits cited them more often!

*NB: BUT... Always be cautious! Remember the results of the filtering: only 7 subreddits are within this keyword-selection... quite small to make reliable interpretations...*

 