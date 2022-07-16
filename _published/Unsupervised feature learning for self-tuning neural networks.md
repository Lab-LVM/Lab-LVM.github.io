---
title: Unsupervised feature learning for self-tuning neural networks
author: Jongbin Ryu
date: 2021-10-10
publication: Electronics Letters
img: /assets/images/papers/paper_image3.png
---

# 1. Abstraction
In recent years transfer learning has attracted much attention due to its ability to adapt a well-trained model from one domain to another. Fine-tuning is one of the most widely-used methods which exploit a small set of labeled data in the target domain for adapting the network. Including a few methods using the labeled data in the source domain, most transfer learning methods require labeled datasets, and it restricts the use of transfer learning to new domains. In this paper, we propose a fully unsupervised self-tuning algorithm for learning visual features in different domains. The proposed method updates a pre-trained model by minimizing the triplet loss function using only unlabeled data in the target domain. First, we propose the relevance measure for unlabeled data by the bagged clustering method. Then triplets of the anchor, positive, and negative data points are sampled based on the ranking violations of the …