import DotGrid from "../../ui/background/DotGrid/DotGrid.tsx";

export default function  NotFound404() {
return (
  <>
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <DotGrid
        dotSize={3}
        gap={15}
        baseColor="#5227FF"
        activeColor="#D327F5"
        proximity={120}
        shockRadius={250}
        shockStrength={50}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  </>
)
}