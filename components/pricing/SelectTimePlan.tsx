export interface Props {
  updateDiscount: (value: boolean) => void;
  annualDiscount: number | undefined;
}

function SelectTimePlan({
  updateDiscount,
  annualDiscount,
}: Props) {
  return (
    <form class="relative flex font-bold text-white">
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
        class={`px-4 py-1.5 rounded-[10px] bg-[#070D0D] hover:opacity-80 peer-checked/month:bg-[#162121] cursor-pointer transition duration-300 ease-in-out`}
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
        class={`flex gap-2 pl-4 pr-1 py-1.5 rounded-[10px] bg-[#070D0D] hover:opacity-80 peer-checked/year:bg-[#162121] cursor-pointer transition duration-300 ease-in-out`}
      >
        Annual
        {annualDiscount && (
          <div class="rounded-lg border border-[#02F67C] bg-[#02F67C20] px-3 py-0.5 text-sm">
            {annualDiscount}% off
          </div>
        )}
      </label>
    </form>
  );
}

export default SelectTimePlan;
