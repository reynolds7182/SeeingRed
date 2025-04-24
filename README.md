# Seeing Red: The Emotional Toll of Staying Informed

## Overview

**Seeing Red** is an interactive, text-based project that visualizes the emotional weight of staying informed in a turbulent world. It uses real-time global news headlines and sentiment analysis to show how quickly news can feel overwhelming, visually blurring and fading neutral information while highlighting emotionally charged language.

The project reflects the exhaustion and helplessness that can come from trying to remain politically engaged amid a constant flood of troubling events.

## How It Works

- **News Data Source**: Headlines are retrieved in real-time using the GDELT API.
- **Sentiment Analysis**: The AFINN model is used to score the sentiment of each word in a headline.
- **Color Coding**:
  - Negative words appear in **red**
  - Positive words appear in **green**
  - Neutral words fade to transparency as you scroll
- **Interaction**: As headlines accumulate, they become less legible and more emotionally saturated, simulating the toll of information fatigue.

## Technologies Used

- **JavaScript** (p5.js) for visual rendering
- **GDELT API** for live news headlines
- **AFINN lexicon** for sentiment scoring
- **Custom dictionaries** for mapping words to colors

## Development Notes

- Early prototypes simply displayed full titles.
- The display was later restructured to color-code and position individual words based on sentiment.
- A major challenge was handling overlapping word displays and updating them smoothly in real-time.

## Screenshots

![Screenshot 1](https://git.arts.ac.uk/24001912/CCI-Course-Notebook-2/assets/1208/0cc05559-9896-44e6-a23b-e3c26d1291ee)
![Screenshot 2](https://git.arts.ac.uk/24001912/CCI-Course-Notebook-2/assets/1208/0afc8706-a936-40b8-9610-072614ac7209)

**Early Sketch**:
![Sketch](https://git.arts.ac.uk/24001912/CCI-Course-Notebook-2/assets/1208/a0529ee4-d3bc-4125-bbf5-47e5293ba31e)

## References

- Anthropic (2025). *Claude AI*. Available at: https://claude.ai [Accessed 19 March 2025].
- GDELT (2025). *GDELT API Documentation*. https://gdelt.github.io/#api=doc&query=news [Accessed: 8 March 2025].
- Shiffman, D. (2019a). *Working with JSON Data in JavaScript* [YouTube]. https://www.youtube.com/watch?v=uxf0--uiX0I
- Shiffman, D. (2019b). *Sentiment Analysis with AFINN* [YouTube]. https://www.youtube.com/watch?v=uw3GbsY_Pbc
- Shiffman, D. (2023). *The AFINN-111 List and Sentiment Scores* [YouTube]. https://www.youtube.com/watch?v=VV1JmMYceJw

---

Built as part of the Creative Computing Institute coursework (UAL, 2025).
