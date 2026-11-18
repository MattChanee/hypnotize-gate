/* =========================================================
   TRACK LIST — add one entry per track you want to gate.
   Each track's page is:  yoursite/?t=<slug>
   e.g.  https://you.github.io/gate/?t=hypnotize

   Put the cover + audio for each track in tracks/<slug>/
   ========================================================= */

const SITE = {
  artist:    "Sinthetic",
  instagram: "https://www.instagram.com/sintheticdubs/",
  igHandle:  "sintheticdubs",
  unlockDelay: 5   // seconds after the follow pop-up opens before the download unlocks
};

const TRACKS = {
  hypnotize: {
    title:    "Hypnotize",
    artist:   "Sinthetic",                               // optional, defaults to SITE.artist
    cover:    "tracks/hypnotize/cover.jpg",
    file:     "tracks/hypnotize/Sinthetic-Hypnotize.wav",
    format:   "WAV",                                     // shown on the button
    accent:   "#b45cff",                                 // button/highlight colour for this page
    soundcloud: ""                                       // optional: SoundCloud track URL for a player
  },

  /* Copy this block for the next track:
  "next-track": {
    title:    "Next Track",
    cover:    "tracks/next-track/cover.jpg",
    file:     "tracks/next-track/Sinthetic-Next-Track.wav",
    format:   "WAV",
    accent:   "#e1306c",
    soundcloud: ""
  },
  */
};
