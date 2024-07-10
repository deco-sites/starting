function SelectTimePlan({ updateDiscount }: { updateDiscount: (value: boolean) => void }) {
  return (
    <form
      class="relative flex gap-1 font-bold text-white"
      >
      <input
        class={`peer/month`}
        type="radio"
        id={"month"}
        name={"check"}
        hidden
        checked
        />
      <label
        for={"month"}
        onClick={() => updateDiscount(false)}
        class={`px-8 py-1.5 rounded-[10px] bg-[#070D0D] hover:opacity-80 peer-checked/month:bg-[#162121] cursor-pointer transition duration-300 ease-in-out`}
      >
        Monthly
      </label>
      <input
        class={`peer/year`}
        type="radio"
        id={"year"}
        hidden
        name={"check"}
      />
      <label
        for={"year"}
        onClick={() => updateDiscount(true)}
        class={`px-8 py-1.5 rounded-[10px] bg-[#070D0D] hover:opacity-80 peer-checked/year:bg-[#162121] cursor-pointer transition duration-300 ease-in-out`}
      >
        Annual
      </label>
    </form>
  );
}

export default SelectTimePlan;
