import { notesToPlayInOrder } from "./music-to-play";
import { MusicalNote } from "./musical-score";

async function playMusic() {
    const notes = notesToPlayInOrder;

    playAudio(0);

}

/**
 * plays the audio from the musicalNote array
 * @param index
 */
function playAudio(index: number) {
    if (index < notesToPlayInOrder.length) {
        const accidentals = {
            "F": "Flat",
            "S": "Sharp"
        }
        let audioFile = "./src/assets/" + notesToPlayInOrder[index].pitch + notesToPlayInOrder[index].octave;
        if (notesToPlayInOrder[index].accidental != undefined) {
            audioFile += " " + accidentals[notesToPlayInOrder[index].accidental] ;
        }
        audioFile +=  ".mp3"
        console.log(index)
      const audio = new Audio(audioFile);
      audio.play();
      setTimeout(() => {
        audio.pause();
        playAudio(index + 1);
      }, notesToPlayInOrder[index].beats * 1000);
    }
  }

document.getElementById('start-playing')?.addEventListener('click', playMusic);
function sleep(arg0: number) {
    throw new Error("Function not implemented.");
}