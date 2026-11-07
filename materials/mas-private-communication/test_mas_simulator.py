"""Local MAS simulator tests; no sockets, radios, or real credentials."""
import unittest
from mas_simulator import MockPacket, classify, run


class MASTests(unittest.TestCase):
    def test_approved_device(self):
        result = classify(MockPacket("farm-hq", "status", "synthetic"))
        self.assertEqual(result["action"], "allow")
        self.assertIsNone(result["stored_content"])

    def test_unknown_device_rejected_and_isolated(self):
        result = classify(MockPacket("unknown", "join", "synthetic"))
        self.assertEqual(result["action"], "reject")
        self.assertEqual(result["zone"], "isolated-decoy-sim")
        self.assertIn("decoy_reply", result)

    def test_no_message_content_is_stored(self):
        events = run([MockPacket("farm-monitor", "read", "secret test value")])
        self.assertNotIn("secret test value", str(events))


if __name__ == "__main__":
    unittest.main()
