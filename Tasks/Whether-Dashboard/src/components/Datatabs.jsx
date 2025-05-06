function Datatabs() {
  return (
    <div className=" bg-background">

    {/* Left group: notifications, Dark mode toggle, location */}
      <div className="flex absolute top-0 left-5">
        <button className="relative m-5 mt-20 items-center justify-center flex">
          <span className="text-base text-third_text font-light">Today</span>
        </button>
        <button className="relative m-5 mt-20 -ml-1  items-center justify-center flex">
        <span className="text-base text-third_text font-light">Tommorow</span>
        </button>
        <button className="relative m-5 -ml-1 mt-20 items-center justify-center flex">
        <span className="text-base text-secondary_text font-medium">Next 7Days</span>
        </button>
      </div>

    {/* right group: notifications, Dark mode toggle, location
    <div className="flex absolute top-0 right-1">
        <button className="relative m-5 mt-24 mr-20 items-center justify-center flex">
        <span className="text-base text-secondary_text font-medium">Chanses of Rain</span>
        </button>
      </div> */}

    </div>
  );
}

export default Datatabs;
