import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>How will you improve the performance of a React Application?</h1>
                <p>There are many ways improve the performance of a React Application. But best focused option is Optimizing performance. Now, we know that what is optimizing performance and how to it improve the performance of a React Application.To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components. According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance. In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.</p>
            </div>
            <div>
                <h1>What are the different ways to manage a state in a React Application?</h1>
                <p>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.Local state is data we manage in one or another component. The local state is most often managed in React using the useState hook. For example, a local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form inputs. Global state is data we manage across multiple components. A global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Sometimes states we think should be local might become global.Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! 0T0here are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            </div>
            <div>
                <h1>How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.We said another ways, Prototype-based programming is a style of object-oriented programming in which behavior reuse is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal,instance-based programming.</p>
            </div>
            <div>
                <h1>Why you do not set the state directly in React. </h1>
                <p>When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.And we say, React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process.we need some data on ui, so we call const [data, setData] = useState([]). In there we can not assign data directly.</p>
            </div>
            <div>
                <h1>What is a unit test? Why should write unit tests?</h1>
                <p>Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>
        </div>
    );
};

export default Blogs;