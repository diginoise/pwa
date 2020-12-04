---
marp: true
theme: uncover
_class: lead
size: 16:9
---
<!-- backgroundImage: "linear-gradient(to bottom, #483e51 , #1f1b23)" -->
<!-- color: "#BFC9ED" -->
---

# **Progressive Web Applications**

## **.: quick introduction :.**
by Daniel Drozdzewski :sweat_smile: [@digi_noise](https://twitter.com/digi_noise)
###### 4th of December 2020
# ![width:640px](sl-logo.png)
 
---
## What is P**WA**?

* :iphone: Mobile
* :lock: Safe
* :signal_strength: Progressive
* :floppy_disk: Can be installed
---
## Examples of PWAs
* :coffee: **Starbucks**
* :taxi: **Uber**
* :musical_note: **Spotify**
* :pushpin: **Pinterest**
 ... 100s more
---
## Why PWA?
#### On-line context:
* engagement :ring: = :pound: revenue
* engagement :chart_with_upwards_trend: = :clock1: time
* attention :warning: = :pill: dopamine (economy)
* attention :warning: = :rocket: liveliness + ... 
---
## Why PWA?
#### On-line **mobile** context:
* **2016** :iphone:s overtook :computer:s
* :iphone: traffic **grew by 222%** in last 7 years
* 40% of people use **only** :iphone:
* avg daily media consumption::iphone:203min **vs** :computer: 128min
* **higher** bounce and **lower** conversion on :iphone:
---
## Why PWA?
#### On-line **mobile** context:
##### Load Time :clock1: and Conversion Rates :moneybag::
* :computer: desktop: 1.8s :clock1: = 12.8%
* :pill:    tablet: 1.9s :clock1: = 7.2%
* :iphone: mobile: 2.7s :clock1: = 3.3% 

[*State of Online Retail Performance*](https://blogs.akamai.com/2017/04/new-findings-the-state-of-online-retail-performance-spring-2017.html) by **Akamai**

---
## Why PWA?
#### On-line **mobile** context:
Impact of **1s slowdown** :chart_with_downwards_trend: on conversion rates:
* :computer: desktop: -21.8%
* :pill: tablet: -17.8%
* :iphone: mobile: -20.5% 

[*State of Online Retail Performance*](https://blogs.akamai.com/2017/04/new-findings-the-state-of-online-retail-performance-spring-2017.html) by **Akamai**

---
## Q: Why PWAs? 
## A: :moneybag: :moneybag: :moneybag:
* :coffee: **Starbucks**: **2x** daily active users
* :taxi: **Uber**: fast load even on **2G** (under 3s)
* :bird: **Twitter Lite**: +65% page views, +75% more tweets
* :pushpin: **Pinterest**: +60%:ring:, +44% ad :dollar:
... 100s more: [**pwastats.com**](https://www.pwastats.com/)
---
<!-- backgroundImage: "linear-gradient(to bottom, #bedcfa , #da9ff9)" -->
<!-- color: "#583d72" -->
# PWA under the bonnet
* manifest
* service worker
* HTTPS
* icons
---
# PWA under the bonnet
##### manifest.json
```
{ 
	"name":"First PWA", 
	"start_url":"index.html", 
	"display":"standalone", 
	"background_color":"#5900b3", 
	"theme_color":"black", 
	"icons":[ 
        { 
            //...
        } 
    ] 
}
```
---
# PWA under the bonnet
### index.html
```
<head>
          <link rel="manifest" href="manifest.json"> 
</head>
```
```
<script> 
  window.addEventListener('load',() => registerSW());
</script>
```
---
# PWA under the bonnet
### serviceworker.js
* **web browser**'s networking proxy
    * has access to all resources :warning:
    * hence need for **`https://`** :lock: 
* adds assets to browser cache
* fetches assets from cache when no network 
---
# demo
---
# PWAs Recap
* **Mobile** : big market, challenging technical context
    * Many success stories, seems a **MUST** 
* safety + performance (HTTPS + caching)
---
# q & a
---
# plug
# 
##### [www.scottlogic.com/graduate-programme](https://www.scottlogic.com/graduate-programme)
##### [www.scottlogic.com/paid-interns](https://www.scottlogic.com/paid-interns)
