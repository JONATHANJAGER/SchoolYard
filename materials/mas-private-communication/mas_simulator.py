"""MAS: completely offline policy simulator (NOT secure messaging or radio code)."""
import json
from dataclasses import asdict, dataclass
from typing import List

APPROVED = frozenset({"farm-hq", "farm-equipment", "farm-monitor"})


@dataclass(frozen=True)
class MockPacket:
    device_id: str
    topic: str
    content: str  # Invented toy text only, NOT encrypted or protected


def classify(packet: MockPacket) -> dict:
    """Return a synthetic policy event without sending/receiving network traffic."""
    if packet.device_id in APPROVED:
        return {"device_id": packet.device_id, "action": "allow", "zone": "mesh-sim",
                "topic": packet.topic, "stored_content": None}
    return {"device_id": packet.device_id, "action": "reject", "zone": "isolated-decoy-sim",
            "topic": packet.topic, "stored_content": None,
            "decoy_reply": "Offline demonstration. No real system access."}


def run(packets: List[MockPacket]) -> list:
    """Process packets entirely in memory, retaining no message content."""
    return [classify(p) for p in packets]


if __name__ == "__main__":
    examples = [MockPacket("farm-hq", "status", "SIMULATED equipment check"),
                MockPacket("unknown-node", "join", "SIMULATED hello"),
                MockPacket("farm-monitor", "telemetry", "SIMULATED weather reading")]
    print(json.dumps(run(examples), indent=2))
