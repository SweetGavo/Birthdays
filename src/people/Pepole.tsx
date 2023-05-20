import * as React from "react";
import { Component } from "react";

export const People = ({ person }: any) => {
  return (
    <>
      {person.map((person: any) => {
        const { id, name, image, age } = person;

        return (
          
          <article key={id} className="container">
            <div className=" mb-4">
              <div></div>
              <img src={image} alt={name} />
              <div className={"m-4"}>
                <h3>{name}</h3>
                <p>{age} years</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
