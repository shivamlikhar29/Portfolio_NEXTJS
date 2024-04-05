"use client";
import React from "react";
import { NodejsOriginalWordmark,ReactOriginalWordmark, ExpressOriginal, MongodbOriginalWordmark,AmazonwebservicesOriginalWordmark, DockerOriginalWordmark, KubernetesOriginalWordmark } from 'devicons-react';
import '../globals.css'




const AchievementsSection = () => {
  return (
      <div className="py-16"> 
        <div className=" flex justify-around border border-gray-400 p-4">
          <>
          <ReactOriginalWordmark size={80} />
          <ExpressOriginal size={80} />
          <NodejsOriginalWordmark size={80}/>
          <MongodbOriginalWordmark size={80}/>
          <AmazonwebservicesOriginalWordmark size={80}/>
          <DockerOriginalWordmark size={80}/>
          <KubernetesOriginalWordmark size={80}/>
          
          </>
        </div>
        </div>
        
        
     
  );
};

export default AchievementsSection;
