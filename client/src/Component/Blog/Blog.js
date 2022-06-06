import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="container">
      <h3>Questions and Answers</h3>
      <div className="qs-ans">
        <h5>Difference between Node.JS and Javascript </h5>
        <b>Javascript</b>
        <p>
          Javascript একটি প্রোগ্রামিং Language যা ওয়েবসাইটে স্ক্রিপ্ট লেখার
          জন্য ব্যবহৃত হয়।
        </p>
        <p>
          Javascript একটি high -level প্রোগ্রামিং language যা Oops ভিত্তিক ধারণা
          এবং prototype inheritance ব্যবহার করে।
        </p>
        <p>JavaScript শুধুমাত্র ব্রাউজারে চলতে পারে।</p>
        <p>JavaScript client side এ বেশি ব্যবহার করা হয় </p>
        <p>JavaScript ব্যবহার করে HTML এবং DOM manipulate করা সম্ভব </p>
        <p>
          এটি ECMA স্ক্রিপ্টের upgrade version যা C++ এ লেখা এবং এটি Chrome এর
          V8 ইঞ্জিন ব্যবহার করে
        </p>
        <b>Node JS</b>
        <p>NodeJS হল Javascript এর runtime environment.</p>
        <p>
          Node JS হল একটি cross-platform and open-source Javascript এর runtime
          environment. এটি javascript কে server-side run করতে সাহায্য করে .
          Nodejs এর মাধ্যমে browser এর বাইরে Javascript code run করা সম্ভব .
        </p>
        <p>এটি server-side এ বেশি ব্যবহার করা হয় .</p>
        <p>Node JS এ HTML এর কোন ট্যাগ ব্যবহার করা হয় না</p>
        <p>Node JS c++ ,c ও javascript দিয়ে লেখা হয়েছে।</p>
      </div>
      <div className="qs-ans">
        <h5>Differences between SQL and NoSQL databases</h5>
        <p>
          SQL databases কে মূলত Relational Databases বলা হয়ে অন্য দিকে NOSQL
          database কে non Relational Databases বলে.
        </p>
        <p>
          SQL databases define ও manipulates করার জন্য structured query language
          (SQL ) ব্যবহার করা। ওপর দিকে NOSQL database এর format হলো
          unstructured.এটি বিভিন্ন উপায়ে ডাটাবেসে information store করে রাখে।
          এটি Object format অর্থাৎ key value এর মতো data store করে।{" "}
        </p>
        <p>
          SQL ডাটাবেস হলো table base অর্থাৎ table এর মধ্যে সকল ডাটা store রাখা
          হয়। NoSQL এ বিভিন্ন ভাবে data store করে রাখা হয়ে যেমনঃ key-value
          pairs, document-based, graph databases
        </p>
        <p>
          SQL database ACID property follow করে থাকে অপর দিকে NoSQL Database
          CAP(consistency, availability, partition tolerance) follow করে।{" "}
        </p>
        <p>SQL database Vertically Scalable আর NoSQL Horizontally scalable</p>
      </div>
      <div className="qs-ans">
        <h5>What is the purpose of jwt and how does it work</h5>

        <b>Purpose of JWT </b>
        <p>
          <b>Authentication :</b> JWT user authentication এ ব্যবহার করা হয়। user
          log in করার পর সার্ভার এ JWT সহ একটি request প্রেরণ করা হয়ে। এবং সেই
          যত ব্যবহার করে সার্ভার user কে route ,service ,resources এ প্রবেশ এর
          access দেয় <br />
          <br />
          <b>Information Exchange:</b> JWT এর মাধ্যমেভি server ও client এর
          information আদান প্রদান করা অনেক secure . JWT এর মাধ্যমে server জানে
          কোন information কোন user কে প্রদান করতে হবে
        </p>
        <b>How does JWT work</b>
        <p>
          JSON web token অথবা JWT ওয়েবসাইট এ authentication এর জন্য ব্যবহার করা
          হয়। এটি server ও client এর মধ্যে একটি security share করে যার মাধ্যমে
          সঠিক user identify করা হয়ে। JWT কে ৩টি অংশে ভাগ করা হয়।
          <br /> header : এটির মধ্যে থাকে কোন algorithm ব্যবহার করা হয়েছে এবং
          token টাইপ <br /> payload : এর মধ্যে থাকে data অথাৎ user এর ইনফরমেশন
          এবং token এর expire date <br />
          signature : এটি একটি unique code যা ভেরিফাই করে token valid কি না।
        </p>
      </div>
    </div>
  );
};

export default Blog;
