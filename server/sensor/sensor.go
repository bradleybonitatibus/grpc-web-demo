package sensor

import (
	"log"
	"math/rand"
	"sync"
	"time"
)

// Sensor struct contains a Data and a RWMutex to limit data races across
// goroutines
type Sensor struct {
	Data map[string]int64
	M *sync.RWMutex
}

// NewSensor initializes and creates a new sensor struct and returns it as a
// pointer
func NewSensor() *Sensor {
	return &Sensor{
		Data: make(map[string]int64),
		M: &sync.RWMutex{},
	}
}

// SetTempSensor locks the mutex, updates the Data map for temperature
// and then locks the mutex for further use. This function will run continuously
// throughout the lifetime of the go routine
func (s *Sensor) SetTempSensor() {
	for {
		s.M.Lock()
		s.Data["temp"] = int64(rand.Intn(120))
		s.M.Unlock()
		time.Sleep(5 * time.Second)
	}
}

// SetHumiditySensor runs an infinite loop that generates random humidity 
// data and updates the Sensors Data map[string]int64 every 5 seconds
func (s *Sensor) SetHumiditySensor() {
	for {
		s.M.Lock()
		s.Data["humidity"] = int64(rand.Intn(100))
		s.M.Unlock()
		time.Sleep(2 * time.Second)
	}
}

// StartMonitoring runs two goroutines that generate mock data
func (s *Sensor) StartMonitoring() {
	log.Println("Starting moniroting sensors")
	go s.SetHumiditySensor()
	go s.SetTempSensor()
}

// GetTempSensor reads the data and returns the mock temp data as int64
func (s *Sensor) GetTempSensor() int64 {
	s.M.RLock()
	defer s.M.RUnlock()
	return s.Data["temp"]
}

// GetHumiditySensor reads the humidity data and returns it as int64
func (s *Sensor) GetHumiditySensor() int64 {
	s.M.RLock()
	defer s.M.RUnlock()
	return s.Data["humidity"]
}