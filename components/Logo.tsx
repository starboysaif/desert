export default function Logo({ size = 60, rolling = true }: { size?: number; rolling?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={rolling ? "tumbleweed-roll" : ""}
    >
      <path d="M 29.4 121.8 C 68.8 60.3, 108.3 57.1, 156.4 76.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 142.0 128.2 C 83.9 108.1, 76.2 137.9, 33.6 124.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 134.5 152.5 C 123.5 124.7, 89.9 133.9, 69.2 139.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 38.5 92.6 C 123.0 83.5, 126.7 54.3, 163.7 119.1" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 77.6 151.4 C 74.1 101.5, 58.0 59.8, 65.1 64.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 173.5 100.3 C 122.3 133.0, 122.3 145.0, 80.5 158.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 164.0 139.0 C 122.2 113.7, 140.4 131.2, 33.8 120.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 50.3 80.6 C 64.8 59.7, 83.3 80.9, 168.2 93.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 155.6 89.7 C 87.3 133.3, 86.8 115.5, 37.1 63.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 115.9 167.8 C 102.0 114.9, 82.1 119.8, 44.6 85.8" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 48.2 154.0 C 46.3 95.8, 79.9 47.8, 119.3 41.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 100.2 168.7 C 47.1 143.8, 105.7 134.1, 28.0 81.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 153.1 113.2 C 65.4 150.8, 80.5 113.5, 93.8 32.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 157.8 126.7 C 83.0 124.9, 107.1 115.1, 47.7 149.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 50.1 117.7 C 78.8 80.9, 55.8 60.7, 71.4 49.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 81.3 51.6 C 145.2 88.1, 112.9 89.0, 118.3 145.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 43.4 106.3 C 99.7 61.3, 99.0 51.6, 171.2 126.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 115.5 44.3 C 121.7 153.4, 108.0 153.4, 34.5 114.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 54.5 54.5 C 129.5 62.4, 87.7 53.6, 164.7 106.8" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 94.3 39.9 C 110.3 79.0, 117.1 67.0, 108.4 171.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 79.2 38.2 C 107.7 92.3, 105.1 75.6, 143.2 159.8" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 150.1 66.3 C 141.6 131.8, 96.7 151.4, 31.6 125.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 147.0 56.0 C 131.6 121.5, 131.0 135.7, 91.8 156.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 89.8 159.8 C 73.1 126.3, 71.1 107.6, 47.8 80.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 149.8 94.4 C 92.3 117.4, 82.4 123.8, 58.6 126.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 160.3 107.3 C 119.1 115.3, 114.0 141.4, 90.4 147.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 51.7 48.5 C 122.2 80.0, 114.7 92.5, 138.1 164.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 87.6 45.8 C 134.5 90.2, 133.0 95.4, 157.7 99.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 161.6 58.8 C 135.8 112.9, 132.1 94.6, 142.5 153.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 154.0 48.8 C 96.9 124.1, 93.0 143.7, 39.2 104.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 117.2 173.5 C 49.2 57.7, 46.4 97.0, 153.9 47.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 155.0 131.5 C 88.2 115.6, 116.4 148.5, 30.5 97.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 73.6 144.7 C 93.2 55.7, 62.8 56.0, 148.5 80.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 151.5 83.0 C 144.4 109.9, 151.1 114.6, 124.8 157.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 72.9 166.3 C 51.8 114.0, 72.6 130.8, 78.6 30.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 36.7 85.5 C 118.2 83.5, 124.1 67.1, 148.7 97.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 77.1 41.2 C 128.0 62.3, 115.0 84.5, 151.6 70.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 124.6 43.8 C 114.1 98.5, 148.0 85.1, 43.6 107.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 123.1 163.1 C 107.8 129.5, 90.3 119.1, 43.0 98.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 99.8 162.8 C 74.8 133.2, 78.7 113.1, 42.2 83.1" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 53.7 45.1 C 126.2 103.3, 142.6 64.1, 150.8 140.8" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 78.5 149.7 C 88.3 78.6, 79.0 82.3, 175.8 95.5" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 134.6 39.0 C 136.8 84.0, 129.9 135.0, 101.7 151.5" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 160.9 87.7 C 146.0 95.8, 120.1 95.1, 113.0 168.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 39.4 79.6 C 109.0 79.5, 55.4 64.9, 151.9 104.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 156.4 123.1 C 73.7 128.7, 104.1 142.2, 101.2 30.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 83.9 49.4 C 133.7 95.5, 134.4 82.5, 69.0 152.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 153.0 57.9 C 100.2 133.4, 77.8 154.9, 27.9 97.6" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 96.4 168.8 C 100.9 66.2, 94.1 53.8, 162.7 69.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 106.5 32.1 C 114.0 78.5, 143.5 92.4, 124.3 143.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 107.5 166.2 C 69.1 80.7, 63.8 52.1, 150.2 72.1" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 77.3 28.1 C 146.7 98.1, 116.6 92.4, 87.2 146.9" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 60.9 138.7 C 73.0 94.3, 42.7 82.9, 46.0 50.3" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 123.7 39.7 C 100.6 50.3, 112.2 80.0, 167.0 117.4" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 43.0 52.1 C 85.2 62.6, 98.5 55.2, 129.8 48.1" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 88.2 155.0 C 83.8 91.1, 77.7 75.5, 128.7 61.0" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 99.2 24.3 C 102.7 44.6, 82.6 43.8, 172.7 84.1" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 32.5 90.0 C 151.6 59.7, 140.8 85.0, 116.5 158.9" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 118.0 160.1 C 88.5 145.3, 92.5 140.9, 54.6 124.2" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M 113.3 25.2 C 125.6 122.1, 142.1 128.0, 101.1 174.7" stroke="white" strokeWidth="1.7" fill="none" strokeLinecap="round" />
    </svg>
  );
        }
