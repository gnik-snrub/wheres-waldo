import { writable } from 'svelte/store'

export const leaderboardData = writable([
  {name: 'Bob', time: 15},
  {name: 'Jen', time: 25},
  {name: 'Some long name, like a reaaaaaaaaaaaaaaaaaaaaaaaally long name', time: 10},
  {name: 'Tim', time: 10}
])

