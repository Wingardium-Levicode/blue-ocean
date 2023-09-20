import React, {useState} from "react";
import axios from "axios"
import BeanRating from "./BeanRating";

const WriteReview = (prop) => {
  const [value, updateValue] = useState("")
  const [ selectedBean, updateBean ] = useState(null)

  return (
    <>
      <button className="btn btn-xs md:btn-sm lg:btn-md btn-primary m-1 md:m-2 transform hover:translate-y-[-2px] hover:shadow-lg min-w-[4rem] md:min-w-[6rem] lg:max-w-[8rem]" onClick={() => document.getElementById('write_review').showModal()}>WRITE REVIEW</button>
      <dialog id="write_review" className="modal">
        <div className="modal-box relative">
          <form method="dialog" onSubmit={(e) => {
            const data = {
              "title" : "test",
              "body" : value,
              "rating" : selectedBean || 1,
              "location_name" : prop.name,
              "user_id" : 20,
              "reviews_photos": ["https://picsum.photos/800/400", "https://picsum.photos/800/500", "https://picsum.photos/800/600"],
              "user": {"username": "Java Drinker"}
          }
            axios.post(`http://localhost:${import.meta.env.VITE_PORT}/company/900/reviews/add`, data).then((res) => {
              console.log(res)
            }).catch((err) => console.log(err))
            updateValue("")
          }}>
            <button className=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Write a Review for [company Name]</h3>

          <p className="py-4"></p>
          <textarea className="textarea textarea-bordered w-full" placeholder="Write a review..." value={value} onChange={(e) => {
            updateValue(e.target.value)
          }}></textarea>
          <BeanRating updateBean={updateBean} rating={selectedBean}/>
          <input className="btn btn-primary float-right" type="Submit" />
          </form>
        </div>
      </dialog>
    </>
  )
}

<button
className="btn btn-xs md:btn-sm lg:btn-md btn-primary m-1 md:m-2 transform hover:translate-y-[-2px] hover:shadow-lg min-w-[4rem] md:min-w-[6rem] lg:max-w-[8rem]"
>
Write Review
</button>

export default WriteReview;