## Seeing Red: The Emotional Toll of Staying Informed

##Project Description

I am an American, and I keep feeling exhausted by the state of my country and the role we play in the world. Every day, there are new headlines about terrible events, and it feels impossible to keep up. I want to be engaged in political matters and stand up for important issues, but at some point, the sheer volume of problems makes it feel hopeless. No one person can advocate for every cause, and that helplessness is what I wanted to capture in this project.

I created an interactive text-based piece that reflects this overwhelming feeling. It pulls in live news headlines from all over the world using the GDELT API (GDELT, 2025). As the headlines keep appearing, they start to blur together, making them harder to read. Negative words turn red, positive words turn green, and neutral words slowly fade as you scroll down the screen. Eventually, all that remains are the most emotionally charged words, and more often than not, the screen is covered in red. This mirrors what it feels like to follow the news for too long. At first, you want to stay informed, but after a while, the weight of it all becomes too much.

Building this project was more experimental than I expected. I knew I wanted to use sentiment analysis, so I based my approach on the AFINN model and used Coding Train tutorials to understand how to implement it (Shiffman, 2019a; 2019b; 2023). The GDELT database became my source for real-time news, and I used ClaudeAI at one point to figure out how to keep the API up to date (OpenAI, 2025). My first step was writing a function that pulled in article titles and stored them in an array. Then, I needed a way to break each title into individual words, compare them to the AFINN dataset, and assign sentiment scores. Once I had that working, I built a dictionary that kept track of scored words and their corresponding colors.

The hardest part was figuring out how to display everything correctly. I started by adding full titles one after another, then realized I needed to handle each word separately. That meant splitting every title again, applying the sentiment scoring function, and making sure the colors updated properly. In the end, I needed two main display functions—one for showing the raw titles and another for redrawing the scored words on top. It took a lot of trial and error, but now it works exactly as I imagined. 


##Project Images

<img width="1328" alt="Screenshot 2025-03-19 at 9 07 45 PM" src="https://git.arts.ac.uk/24001912/CCI-Course-Notebook-2/assets/1208/0cc05559-9896-44e6-a23b-e3c26d1291ee">
<img width="1342" alt="Screenshot 2025-03-19 at 9 08 03 PM" src="https://git.arts.ac.uk/24001912/CCI-Course-Notebook-2/assets/1208/0afc8706-a936-40b8-9610-072614ac7209">

Early Sketch of Original Idea:

<img width="780" alt="Screenshot 2025-03-19 at 9 09 48 PM" src="https://git.arts.ac.uk/24001912/CCI-Course-Notebook-2/assets/1208/a0529ee4-d3bc-4125-bbf5-47e5293ba31e">


##References:

Anthropic. (2025). Claude AI [online]. Available at: https://claude.ai [Accessed 19 March 2025].

GDELT (2025) GDELT API Documentation. Available at: https://gdelt.github.io/#api=doc&query=news (Accessed: 8 March 2025).

Shiffman, D. (2019a) Working with JSON Data in JavaScript [YouTube]. Available at: https://www.youtube.com/watch?v=uxf0--uiX0I (Accessed: 8 March 2025).

Shiffman, D. (2019b) Sentiment Analysis with AFINN [YouTube]. Available at: https://www.youtube.com/watch?v=uw3GbsY_Pbc&t=3s (Accessed: 8 March 2025).

Shiffman, D. (2023) The AFINN-111 List and Sentiment Scores [YouTube]. Available at: https://www.youtube.com/watch?v=VV1JmMYceJw&t=76s (Accessed: 8 March 2025).

