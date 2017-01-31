import React, { Component } from 'react';

var textCode = "";
var numCode = "";
var result="";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";


export function TextCode( textLength ){
  for( var i=0; i < textLength; i++ )
  {
      textCode += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  result = textCode;

  return result;
}

export function NumCode( numLength ){
  for( var i=0; i < numLength; i++ )
  {
      numCode += num.charAt(Math.floor(Math.random() * num.length));
  }

  result = numCode;

  return result;
}

export function TextNumCode( textLength, numLength ){

   for( var i=0; i < textLength; i++ )
   {
       textCode += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
   }

   for( var i=0; i < numLength; i++ )
   {
       numCode += num.charAt(Math.floor(Math.random() * num.length));
   }

   result = textCode+numCode;

   return result;
}
