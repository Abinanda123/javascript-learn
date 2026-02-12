class song{
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
        this.next = null;
    }
}
class playlist{
    constructor(){
        this.head = null;
    }
    add(title, artist){
        const newSong = new song(title, artist);
         if(!this.head){
            this.head = newSong;
            return;
         }
         let current = this.head;
         while(current.next){
            current = current.next;
         }
         current.next = newSong;
        }
    removeduplicate(){
        const seen = new Set();
        let current = this.head;
        let prev = null;     
        while(current){  
            if(seen.has(current.title + current.artist)){
                prev.next = current.next; // Remove duplicate
            } else {
                seen.add(current.title + current.artist);
                prev = current;
            }    
            current = current.next;
      }
    }

    getStats() {
        // TODO: Loop through list, count artists
        const stats ={};
        let current =this.head;
        while(current){
            const artist = current.artist;
            stats[artist] = (stats[artist] || 0) + 1;
            current = current.next;
        }
        return stats;
    }
    print(){
        let current = this.head;
        const output = [];
        while(current){
            output.push(`${current.title} by ${current.artist}`);
            current = current.next;
        }
        console.log(output.join("\n"));
    }
    printreverse(node){
        if(node === null) return;
        this.printreverse(node.next);
        console.log(`${node.title} by ${node.artist}`);
    }

}

// Test It
const myJams = new Playlist();
myJams.add("Song A", "Artist 1");
myJams.add("Song A", "Artist 1"); // Duplicate!
myJams.add("Song B", "Artist 2");

console.log("Before cleanup:");
// Print list...

myJams.removeDuplicates();

console.log("After cleanup:");
// Print list... (Should only have Song A and Song B)
