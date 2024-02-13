import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";

// ⚠️ This is a very unusual type setup. It's not a great idea in the real world
// to nest so many properties with the exact same name.
// But in Wonderland, this sort of thing is normal,
// so we've just got to find a way through it...

export function trampoline(): void {
  clear(true);
  print("Time to get some of that energy out on the trampoline!");

  askQuestion("How would you like to bounce?", chooseBounce);
}

function chooseBounce(input: string) {
  const bounceType = ["Big bounce", "Little bounce", "Backflip", "Somersault"];

  if (bounceType.includes(input)) {
    print("🦵 Fantastic! Now that's good bouncin'! 🥳");
    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  } else {
    print(
      "Your bounce isn't approved. Didn't you know there's only certain bounces allowed?"
    );
    print("Here's some hints about how to bounce properly:");
    bounceType.forEach((bounce) => {
      print(scramble(bounce));
    });
    askQuestion(
      "I'll ask one last time: How would you like to bounce?",
      chooseLastBounce
    );
  }
}

function chooseLastBounce(input: string) {
  const bounceType = ["Big bounce", "Little bounce", "Backflip", "Somersault"];

  if (bounceType.includes(input)) {
    print("🦵 Fantastic! Now that's good bouncin'! 🥳");
    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  } else {
    print("Huh. Obviously your bouncin' doesn't conform. Sorry.");
    return endAdventure();
  }
}

function scramble(word: string): string {
  const strArray = word.split("");
  let i, j, k;
  for (i = 0; i < strArray.length; i++) {
    j = Math.floor(Math.random() * i);
    k = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = k;
  }
  word = strArray.join("");
  return word;
}
