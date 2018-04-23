int blocks_gone;
int bx, by;

void blockgone() {
  blocks_gone = 1;

  for (b=0; b<20; b++) {
    // Calculate the x,y position of upper right corner
    bx = 500;
    by = b*30; 

    // Check if we we have a block (blocks[x] is 1)
    if (blocks[b]==1) { 
      // Draw the block
      noStroke();
      rect(bx, by, r, r);
      //image(beer, bx-15, by);

      // Since we drew a block, all are not gone
      blocks_gone = 0;

    }
    // Check if ball is over the block, if so, remove it (blocks[i]=0) 
    // first check bounce on top/bottom
    if (x>(bx) && x<(bx+r+easy) &&
      y>(by) && y<(by+r+easy) && blocks[b]==1) { 
      blocks[b]=0;
    }
  }
}