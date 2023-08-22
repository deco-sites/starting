function Device() {
  return (
    <div class="w-full h-full bg-lightGreen">
      <div class="h-[100vh] container" style={{ "width": "" }}>
        <iframe
          title="Embedded Content"
          className="h-full w-full"
          src="https://fashion.deco.site/"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Device;
