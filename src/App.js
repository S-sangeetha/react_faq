
import './App.css';
import Accordian from './faq/accordian';
import star from "./assets/images/icon-star.svg";

function App() {
  const quesAns = [
    {
      id: 1,
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here."
    },
    {
      id: 2,
      question: "How do I submit my solution?",
      answer: "We'd recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project."
    },
    {
      id: 3,
      question: "Is there an official solution I can take a look at?",
      answer: "We don't provide official solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback."
    },
    {
      id: 4,
      question: "Do I get a code review when I post my solution?",
      answer: "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question "
    },
  ]
  return (
    <>
      <div className="h-screen">
        <div className='h-100 bg-bgcolor'>
          <div className='bg-background h-56 sm:h-56 md:h-56'>
            <div className='flex items-center justify-center'>
              <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto  bg-white border border-gray-200 rounded-lg shadow mt-28 p-4" >
                <div className="flex flex-row pl-4 pt-4">
                  <img className="rounded-t-lg" src={star} alt="logo" /><h2 className="ml-5 font-WorkSansBold text-customPurple">FAQs</h2>
                </div>
                <div className="mt-6">
                  {quesAns.map(({ question, answer }) => (
                    <Accordian question={question} answer={answer} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
